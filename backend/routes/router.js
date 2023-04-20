const express = require('express');
const clientsRouter = require('./clientsRouter');
const bodyParser = require('body-parser');
//_________

const router = express.Router();
router.use(bodyParser.urlencoded({extended: true})).use(bodyParser.json());

router.use('/clients', clientsRouter);



module.exports = router;