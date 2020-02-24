import plaid from 'plaid';
import config from '../config';

const PLAID_ACCESS_TOKEN = null;
const PLAID_PUBLIC_TOKEN = null;
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

  },
  getTransactions: (req, res, next) => {

  }
}