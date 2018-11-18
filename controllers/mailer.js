//Require the express package and use express.Router()
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// Nodemailer Transporter
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.email_user,
        pass: process.env.email_password
    }
});
router.get('/', function (req, res) {
    const mailOptions = {
        from: process.env.email_user, // sender address
        to: process.env.send_to, // list of receivers
        subject: `Web Inquiry - ${req.query.email} - ${req.query.name}`, // Subject line
        html: req.query.message// plain text body
    };
    transporter.sendMail(mailOptions, function (err, info) {
        if (err)
            console.log(err)
        else
            console.log(info);
        res.status(200).end()
    });
});

module.exports = router;
