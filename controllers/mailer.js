//Require the express package and use express.Router()
const express = require('express');
const router = express.Router();
var request = require('request');
const nodemailer = require('nodemailer');

// Nodemailer
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'user',
        pass: 'pass'
    }
});




router.get('/', function (req, res) {

    const mailOptions = {
        from: 'it@gmail.com', // sender address
        to: req.query.email, // list of receivers
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

    console.log(req.query.name);    //Dev purposes only
    console.log(req.query.email);   //Dev purposes only
    console.log(req.query.message); //Dev purposes only
});

module.exports = router;
