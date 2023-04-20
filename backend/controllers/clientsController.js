const Client = require('../models/client');

exports.getAllClients = async (req, res) => {
    try{
        const clients = await Client.find();
        res.json(clients);
    } catch(e){
        res.sendStatus(500);
    }
};

exports.getClientById = async (req, res) => {

    const id = req.params.id;

    try{
        const client = await Client.findById(id);
        res.json(client);
    } catch(e){
        res.sendStatus(500);
    }
}

exports.createNote = async (req, res) => {

    const client = new Client({
        name: req.body.name,
        number: req.body.number,
        email: req.body.email
    });

    try{
        await client.save();
        res.sendStatus(201);
    } catch(e){
        res.sendStatus(400);
    }   
}