// importing Schema and Model
const { Schema, model } = require('mongoose');

/*
        *** Schema ***
    creating schema  which is the map to a MongoDB collection
    and the shape of the documents within that collection

*/
// creating contact schema
const contactSchema = new Schema({
    name: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
    },
    phone: {
        type: String,
        trim: true,
        minlength: 9,
        maxlength: 16,
    },
});
/*
    *** Model ***
        => Models are fancy constructors compiled from Schema definations.
        => An instance of a model is called a document.
        => Models are responsible for creating and reading from the MongoDB database

*/
// creating contact model and should be write Capitalize Variable name
const Contact = model('Contact', contactSchema);

module.exports = Contact;
