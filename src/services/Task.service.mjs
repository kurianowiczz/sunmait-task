import Container from "../utils/Container.mjs";

export default class TaskService {
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
}
