import User from './user/controller';
import {loginRequired} from './middlewares';
import api from './api';

const router = require('express').Router();
router.get('/', (req, res)=>res.send({message: 'connect to server.circopocket.com', webhook: 'https://server.circopocket.com/webhook', openapi:'https://server.circopocket.com/openapi', api: 'https://server.circopocket.com/api'}));
router.get('/webhook', (req, res)=>res.send({connection: true,timestamp: new Date().toUTCString()}));

router.post('/signupWithEmail', User.signupWithEmail);
router.post('/verifyEmailToken', User.verifyEmailToken);
router.post('/signup/:token', User.signup);
router.post('/signin', User.signin);

router.use('/api', loginRequired, api);

export default router;