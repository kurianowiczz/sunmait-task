'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Projects', [{
            name: 'project',
            userId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        }]);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Projects', null, {});
    }
};
