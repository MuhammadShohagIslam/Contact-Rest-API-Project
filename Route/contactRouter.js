// creating contact router
const contactRouter = require('express').Router();

// importing contact controller
const {
    getAllContact,
    getSingleContact,
    newCreateContact,
    updateContact,
    deleteContact,
} = require('../Controller/contactController');

// getting all data with GET method
contactRouter.get('/', getAllContact);

// creating new contact data with POST method
contactRouter.post('/', newCreateContact);

// getting single contact data with GET method
contactRouter.get('/:id', getSingleContact);

// updating contact data with PUT method
contactRouter.put('/:id', updateContact);

// deleting contact data with DELETE method
contactRouter.get('/delete/:id', deleteContact);

// exporting contact router
module.exports = contactRouter;
