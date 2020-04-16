'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [{
            name: 'John',
            email: 'example@dev.com',
            password: 'qwerty',
            roleId: '1',
            createdAt: new Date(),
            updatedAt: new Date(),
        }]);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', null, {});
    }
};
