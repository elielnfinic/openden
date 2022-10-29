const Contact = require("../model/Contact");
const { sendEmail } = require("../utils/email");

exports.subscribe = (req, res, next) => {
    const {email} = req.body;

    Contact.findOne({email}).exec((err, found_contact) => {
        if (found_contact) {
            return res.status(400).json({
                error : "Email is already subscribed taken"
            });
        }


        const contact = new Contact({email});
        contact.save((err, contact) => {
            if (err) {
                return res.status(400).json({
                    error: "Email address is already registered"
                });
            }

            sendEmail(email, "Thank you for your interest in Openden", "Openden is planning to give better experience in private files management on the blockchain. We will let you when we launch.");
            
            res.json({contact});
        });
    });
}
