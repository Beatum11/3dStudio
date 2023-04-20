const express = require('express');
const clientsController = require('../controllers/clientsController');
//________

const router = express.Router();
//________

router.get('/', clientsController.getAllClients);
router.get('/:id', clientsController.getClientById);

router.post('/', clientsController.createNote);


module.exports = router;