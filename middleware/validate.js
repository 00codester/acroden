const validator = require('../helpers/validate');

const saveClient = (req, res, next) => {
    const valRule = {
        firstName: 'required|string',
        lastName: 'required|string',
        email: 'required|email',
        password: 'required|string'
    };
    validator(req.body, valRule, {}, (err, status) =>{
        if(!status){
            res.status(412).send({
                success: false,
                message: 'Validation failed',
                data: err
            });
        } else {
            next();
        }
    });
};

const saveItem = (req, res, next) => {
    const valRule = {
        itemName: 'required|string',
        price: 'required|integer',
        location: 'required|string',
        description: 'required|string',
        sold: 'required|boolean'
    };
    validator(req.body, valRule, {}, (err, status) =>{
        if(!status){
            res.status(412).send({
                success: false,
                message: 'Validation failed',
                data: err
            });
        } else {
            next();
        }
    });
};

const idLengthCheck = (req, res, next) => {
    const valRule = {
        id: 'string|min:24'
    };
    validator(req.body, valRule, {}, (err, status) => {
        if(!status){
            res.status(412).send({
                success: false,
                message: 'Validation failed',
                data:err
            });
        } else{
            next();
        }
    });
};

module.exports = {
    saveClient,
    idLengthCheck,
    saveItem
}