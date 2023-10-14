const mongodb = require('../db/connections.js');
const ObjectId = require('mongodb').ObjectId;

const awesomeFunction = (req, res, next) => {
    res.json('Emily Karl');
};

const superAwesomeFunction = (req, res, next) => {
    res.json('Super Awesome Person');
};

const getAll = async(req, res) => {
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

module.exports = {
    awesomeFunction,
    superAwesomeFunction,
    getAll
};