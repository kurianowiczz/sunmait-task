global.container = {};
const express = require('express'),
    bodyParser = require('body-parser'),
    config = require('./config'),
    loader = require('./loaders'),
    mainRouter = require('./routes'),
    path = require('path');

const app = express();

const startApp = async () => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.set('views', './src/views');
    app.set('view engine', 'ejs');
    const __dirname = path.resolve();
    app.use(express.static(__dirname + '/public'));
    app.use(mainRouter);
    await loader();

    app.listen(config.port, () => {
        console.log(`Server started on port ${ config.port }`);
    });
};

startApp();

module.exports = app;
