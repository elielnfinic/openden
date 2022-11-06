const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();

const transporter = nodemailer.createTransport({
    service: 'smtp',
    host: process.env.SMTP_SERVER,
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
        user: process.env.EMAIL_ADDR,
        pass: process.env.EMAIL_PASSWORD
    }
});

const sendEmail = async (to, subject, text, html) => {
    const mailOptionsDest = {
        from: process.env.EMAIL_ADDR,
        to: to,
        subject: subject,
        text: text,
        html: html
    };

    const data = await transporter.sendMail(mailOptionsDest);
    console.log(data);
    return data;
}

module.exports = {sendEmail};