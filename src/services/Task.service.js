const Container = require('../utils/Container');

class TaskService {
    static async addTask(task) {
        return Container.getItem('taskModel').create(task);
    };

    static async findAll() {
        return Container.getItem('taskModel').findAll();
    };

    static async findById(id) {
        return Container.getItem('taskModel').findOne({ id });
    };

    static async deleteById(id) {
        return Container.getItem('taskModel').destroy({
            where: { id },
        });
    };

    static async findAllById(projectId) {
        return Container.getItem('taskModel').findAll()
            .then(all => {
                console.log(all);
                return all.filter(el => el.dataValues.projectId === projectId);
            });
    };
}

module.exports = TaskService;
