//Initialize required modules
const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
// controllers
const mailer = require('./controllers/mailer')


//middleware for cors
app.use(cors());
//middleware for bodyparsing using urlencoding
app.use(bodyParser.urlencoded({ extended: true }))
//middleware for bodyparsing using urlencoding
app.use(bodyParser.json())

// API Routes
app.use('/mailer', mailer)


/*express.static is a built in middleware function to serve static files.
 We are telling express server dist folder is the place to look for the static files*/
app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
})

app.use('/mailer', mailer)




//Starts the server to host static files
app.listen(port, () => {
    console.log(`Express Server listening on port:${port}`)
});
