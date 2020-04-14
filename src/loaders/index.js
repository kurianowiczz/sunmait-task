const sequelizeLoader = require('./sequelize');

module.exports = async () => {
    await sequelizeLoader();
};
