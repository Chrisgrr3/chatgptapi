// A express server, which will handle api requests coming in and respond back with a json object, it will use body parser as well as cors.

// This is our web server, which we send post requests to and facilitate API calls

// Install and require express (npm install express), body parser (npm install body-parser) and cors (npm install cors --save)
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const OpenAI = require('openai');
const {Configuration, OpenAIApi} = OpenAI;

const app = express();
const port = 3001;

const configuration = new Configuration({
    organization: "org-g8BaSLse4k8o7zqdCCmaXRqu",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// Telling the express app to use body parser and cors.
app.use(bodyParser.json());
app.use(cors());

// Defining the '/' route.
app.post('/', async(req, res) => {
    // Destructuring message from request
    const { message } = req.body;
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        // Passing the message from the request to OpenAIApi
        // prompt: message,
        // Here, we can take advantage of prompt engineering
        // from the backend.
        prompt: `Answer by providing an explanation of the code.${message}?`, // We insert a question mark just in case, so that ChatGPT doesn't do it for us.
        max_tokens: , // Don't overdo this and use too much credit.
        temperature: 0,
    });
    console.log(response.data);
    if(response.data) {
        if(response.data.choices) {
            res.json({
                message: response.data.choices[0].text
            });
        }
    }
});

app.listen(port, () => {
    console.log('Example app listening')
})