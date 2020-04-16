const db = require('../../m');

class TaskService {
    static async addTask(task) {
        return db['User'].create(task);
    };

    static async findAll() {
        return db['User'].findAll();
    };

    static async findById(id) {
        return db['User'].findOne({ id });
    };

    static async deleteById(id) {
        return db['User'].destroy({
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
