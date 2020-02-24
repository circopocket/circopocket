import plaid from 'plaid';
import moment from 'moment';
import config from '../config';
import User from '../user/model';

const PLAID_CLIENT_ID = config.plaid.client_id;
const PLAID_PUBLIC_KEY = config.plaid.public_id;
const PLAID_SECRET = config.plaid.secret.sandbox;

const plaidClient = new plaid.Client(
  PLAID_CLIENT_ID,
  PLAID_SECRET,
  PLAID_PUBLIC_KEY,
  plaid.environments.sandbox
);

export default {
  creatAccessToken: (req, res, next) => {
    // req.body: {
    //   public_token: '',
    //   accounts: []
    // }
    const userId = req.user._id;
    const PUBLIC_TOKEN = req.body.public_token;
    plaidClient.exchangePublicToken(PUBLIC_TOKEN, (err, tokenResponse) => {
      if (err) return next('403:Plaid failed to create access token.');
      const ACCOUNTS = req.body.accounts;
      const ACCESS_TOKEN = tokenResponse.access_token;
      const ITEM_ID = tokenResponse.item_id;
      User.findById(userId).then(user => {
        user.plaid.account.public_token = PUBLIC_TOKEN;
        user.plaid.account.access_token = ACCESS_TOKEN;
        user.plaid.account.item_id = ITEM_ID,
        user.plaid.account.accounts = ACCOUNTS;
        return user.save();
      })
      .then(savedUser => res.send({ success:  true }))
      .catch(next);
    });
  },
  getTransactions: (req, res, next) => {
    const ACCESS_TOKEN = req.user.plaid.account.access_token;
    const startDate = moment().subtract(90, 'days').format('YYYY-MM-DD');
    const endDate = moment().format('YYYY-MM-DD');
    plaidClient.getTransactions(ACCESS_TOKEN, startDate, endDate, {
      count: 500,
      offset: 0,
    }, (err, transactionsResponse) => {
      if (err) return next('403:Plaid failed to create access token.');
      res.send({ transactions: transactionsResponse });
    });
  }
}