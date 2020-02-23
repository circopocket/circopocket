import User from './user/controller';
import {loginRequired, apifyRequired} from './middlewares';
import api from './api';
import apify from './apify/router';

const router = require('express').Router();
router.get('/', (req, res)=>res.send({message: 'connect to server.decowallet.com', webhook: 'https://server.decowallet.com/webhook', openapi:'https://server.decowallet.com/openapi', api: 'https://server.decowallet.com/api'}));
router.get('/webhook', (req, res)=>res.send({connection: true,timestamp: new Date().toUTCString()}));

router.post('/signupWithEmail', User.signupWithEmail);
router.post('/verifyEmailToken', User.verifyEmailToken);
router.post('/signup/:token', User.signup);
router.post('/signin', User.signin);

router.use('/api', loginRequired, api);

router.use('/apify', apifyRequired, apify);

export default router;