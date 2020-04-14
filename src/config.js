const env = require('dotenv');

env.config();

module.exports = {
    port: process.env.PORT,
    databaseConnection: process.env.DB_CONNECTION,
    secretKey: process.env.SECRET_KEY,
    token: process.env.TOKEN,

};
