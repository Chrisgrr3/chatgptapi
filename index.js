// A express server, which will handle api requests coming in and respond back with a json object, it will use body parser as well as cors.

// Install and require express (npm install express), body parser (npm install body-parser) and cors (npm install cors)
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

// Telling the express app to use body parser and cors.
app.use(bodyParser.json());
app.use(cors());

// Defining the '/' route.
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log('Example app listening')
})