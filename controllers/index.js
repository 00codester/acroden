const mongodb = require('../db/connections.js');
const ObjectId = require('mongodb').ObjectId;
//const userSchema = require('../models/userschema.js');

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
        //const newClient = new userSchema(req.body);
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

const addNewItemForSale = async(req, res) => {
    try {
        const newItem = {
            itemName: req.body.itemName,
            price: req.body.price,
            location: req.body.location,
            description: req.body.description,
            sold: req.body.sold
        };
        //const newClient = new userSchema(req.body);
        const result = await mongodb.getDb().db().collection('inventory').insertOne(newItem);
        if(result.acknowledged){
            res.status(201).json(result);
        } else {
            res.status(500).json(response.error || 'Error occured while creating client');
        }
    } catch(err){
        res.status(500).json({ err });
    }
};

const updateInventoryItem = async(req, res) => {
    try{
        const itemId = new ObjectId(req.params.id);

        const Item = {
            itemName: req.body.itemName,
            price: req.body.price,
            location: req.body.location,
            description: req.body.description,
            sold: req.body.sold
        };
        const result = await mongodb.getDb().db().collection('inventory').replaceOne({_id: itemId}, inventory);
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

const deleteInventoryItem = async(req, res) => {
    try{
        const itemId = new ObjectId(req.params.id);

        const result = await mongodb.getDb().db().collection('inventory').deleteOne({_id: itemId}, true);
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

module.exports = {
    getAllClients,
    getSingleClient,
    addNewClient,
    updateClient,
    deleteClient,
    getAllForSale,
    getSingleItemForSale,
    addNewItemForSale,
    updateInventoryItem,
    deleteInventoryItem
};