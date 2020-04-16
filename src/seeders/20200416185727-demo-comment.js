'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Comments', [{
            description: 'comment_description',
            date: '2020-05-04 22:15:49.942+03',
            taskId: 1,
            userId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        }]);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Comments', null, {});
    }
};
