const Contact = require("../model/Contact");

exports.subscribe = (req, res, next) => {
    const {email} = req.body;
    const contact = new Contact({email});
    contact.save((err, contact) => {
        if (err) {
            return res.status(400).json({
                error: "Email address is already registered"
            });
        }
        res.json({contact});
    });
}
