import Controller from './controller';
const router = require('express').Router();

router.get('/', (req, res)=>res.json({ "message": "/api/bank connected" }));

router.post('/create_access_token', (req, res)=>Controller.creatAccessToken);
router.get('/transactions', (req, res)=>Controller.getTransactions);

export default router;
