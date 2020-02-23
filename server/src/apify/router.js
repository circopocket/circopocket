import Controller from './controller';

const router = require('express').Router();

router.get('/', (req, res)=>res.json({ "message": "/api/product connected" }));

// POST- https://server.circopocket.com/apify/webhook/createOneProduct
router.post('/webhook/createOneProduct', Controller.createOneProduct);

export default router;