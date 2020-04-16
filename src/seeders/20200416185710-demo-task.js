'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Tasks', [{
            name: 'task',
            description: 'task_description',
            status: 'waiting',
            deadline: '2020-05-04 22:15:49.942+03',
            projectId: 1,
            userId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        }]);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Tasks', null, {});
    }
};
