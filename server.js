    var express = require('express')
    var app = express()                        // create our app w/ express
    const path = require('path');
    var port     = process.env.PORT || 8080;                // set the port
    var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
    // Set our api routes
    const api=require('./server/app/routes/api.js');
    app.use('/api', api);

    // Catch all other routes and return the index file
    //setting static path to the dist folder
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'dist/index.html'));
    });

    app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users

    //getting the data of the posting
    app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
    app.use(bodyParser.json());                                     // parse application/json
    // app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json


    // // listen (start app with node server.js) ======================================
    app.listen(port);
    console.log("App listening on port " + port);
    module.exports = app;

