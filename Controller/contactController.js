// importing contact model
const Contact = require('../Model/contactModel');

// handler for getting all contact data
exports.getAllContact = (req, res) => {
    Contact.find()
        .then((contacts) => {
            res.render('pages/home.ejs', { contacts, error: {} });
        })
        .catch((error) => {
            console.log(error);
        });
};

// handler for getting single contact data
exports.getSingleContact = (req, res) => {
    const { id } = req.params;
    Contact.findOne({ _id: id })
        .then((contact) => {
            res.json(contact);
        })
        .catch((err) => {
            console.log(err);
        });
};

// handler for creating contact data
exports.newCreateContact = (req, res) => {
    const { name, email, phone } = req.body;

    const error = {};

    if (!name) {
        error.name = 'Enter Your Name';
    }
    if (!email) {
        error.email = 'Enter Your Email';
    }
    if (!phone) {
        error.phone = 'Enter Your Phone';
    }

    const isError = Object.keys(error).length > 1;

    if (isError) {
        Contact.find()
            .then((contacts) => res.render('pages/home.ejs', { contacts, error }))
            .catch((err) => {
                console.log(err);
                res.json({
                    message: 'Error Ocurred1',
                });
            });
    } else {
        const newContact = new Contact({
            name,
            email,
            phone,
        });
        newContact
            .save()
            .then((c) => {
                Contact.find()
                    .then((contacts) => {
                        res.render('pages/home.ejs', { contacts, error: {} });
                    })
                    .catch((err) => {
                        res.json({
                            message: 'Error Ocurred2',
                        });
                        console.log(err);
                    });
            })
            .catch((err) => {
                res.json({
                    message: 'Error Ocurred3',
                });
                console.log(err);
            });
    }
};

// handler for updating contact data
exports.updateContact = (req, res) => {
    const { id } = req.params;
    const { name, email, phone } = req.body;
    Contact.findOneAndUpdate(
        { _id: id },
        {
            $set: {
                name,
                email,
                phone,
            },
        },
        { new: true }
    )
        .then((contact) => {
            res.json(contact);
        })
        .catch((error) => {
            console.log(error);
        });
};

// handler for deleting contact data
exports.deleteContact = (req, res) => {
    const { id } = req.params;
    Contact.findOneAndDelete({
        _id: id,
    })
        .then(() => {
            Contact.find().then((contacts) => {
                res.render('pages/home.ejs', {
                    contacts,
                    error: {},
                });
            });
        })
        .catch((e) => {
            console.log(e);
            res.json({
                message: 'Error Occurred',
            });
        });
};
