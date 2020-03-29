import express from 'express';
import bodyParser from 'body-parser';
import config from './config.mjs';
import loader from './loaders/index.mjs'
export const app = express();

const startApp = async () => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    await loader();

    app.listen(config.port, () => {
        console.log(`Server started on port ${ config.port }`);
    });
};

startApp();
