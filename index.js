// A express server, which will handle api requests coming in and respond back with a json object, it will use body parser as well as cors.

// This is our web server, which we send post requests to and facilitate API calls

// Install and require express (npm install express), body parser (npm install body-parser) and cors (npm install cors --save)
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;

// Telling the express app to use body parser and cors.
app.use(bodyParser.json());
app.use(cors());

// Defining the '/' route.
app.post('/', (req, res) => {
    res.json({
        message: "Hello World!"
    });
});

app.listen(port, () => {
    console.log('Example app listening')
})