const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json());

app.listen(8081);

app.use(function (req, res, next) {

    // This is a bit insecure, just for the profile counter.
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // The below is default, from a SO copy paste, I dont think it is necessary but I leave it as an exaple. ~~Daniel
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get('/test', (req, res) => {
    res.send({'greeting': 'hello world'});
})

app.use(express.static(__dirname + '/frontend'));
