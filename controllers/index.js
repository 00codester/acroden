const mongodb = require('../db/connections.js');
const ObjectId = require('mongodb').ObjectId;

//Client Controllers
const getAllClients = async(req, res) => {
    try {
        const result = await mongodb.getDb().db().collection('clients').find();
        result.toArray().then((lists) => {
            res.setHeader('Content-Type', 'application/json')
            res.status(200).json(lists);
        });
    } catch(err){
        res.status(500).json({ message: err.message });
    }
};

const getSingleClient = async(req, res) => {
    try {
        const userId = new ObjectId(req.params.id);
        const result= await mongodb
            .getDb()
            .db()
            .collection('clients')
            .find({_id: userId});
        result.toArray().then((lists) => {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(lists[0]);
        });
    } catch(err){
        res.status(500).json({ err });
    }
};

const addNewClient = async(req, res) => {
    try {
        const newClient = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phone: req.body.phone,
            password: req.body.password,
            items4Sale: [],
        };
        const result = await mongodb.getDb().db().collection('clients').insertOne(newClient);
        if(result.acknowledged){
            res.status(201).json(result);
        } else {
            res.status(500).json(response.error || 'Error occured while creating client');
        }
    } catch(err){
        res.status(500).json({ err });
    }
};

const updateClient = async(req, res) => {
    try{
        const userId = new ObjectId(req.params.id);

        const client = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phone: req.body.phone,
            password: req.body.password,
            items4Sale: [],
        };
        const result = await mongodb.getDb().db().collection('clients').replaceOne({_id: userId}, client);
        console.log(result);
        if(result.modifiedCount > 0){
            res.status(204).send();
        } else {
            res.status(500).json({err});
        }
    } catch (err){
        res.status(500).json({err});
    }
};

const deleteClient = async(req, res) => {
    try{
        const userId = new ObjectId(req.params.id);

        const result = await mongodb.getDb().db().collection('clients').deleteOne({_id: userId}, true);
        console.log(result);
        if(result.deletedCount > 0){
            res.status(200).send();
        } else{
            res.status(500).json(response.error || 'Error occured while deleting contact');
        }
    } catch(err){
        res.status(500).json({err});
    }
};

//Inventory Controllers
const getAllForSale = async(req, res) => {
    try {
        const result = await mongodb.getDb().db().collection('inventory').find();
        result.toArray().then((lists) => {
            res.setHeader('Content-Type', 'application/json')
            res.status(200).json(lists);
        });
    } catch(err){
        res.status(500).json({ message: err.message });
    }
};

const getSingleItemForSale = async(req, res) => {
    try {
        const userId = new ObjectId(req.params.id);
        const result= await mongodb
            .getDb()
            .db()
            .collection('inventory')
            .find({_id: userId});
        result.toArray().then((lists) => {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(lists[0]);
        });
    } catch(err){
        res.status(500).json({ err });
    }
};

module.exports = {
    //awesomeFunction,
    //superAwesomeFunction,
    getAllClients,
    getSingleClient,
    addNewClient,
    updateClient,
    deleteClient,
    getAllForSale,
    getSingleItemForSale
};