import Sequelize from 'sequelize';
import config from "../config";

export default async () => {
    const sequelize = new Sequelize(config.databaseConnection);
};
