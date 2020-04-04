import Container from "../utils/Container.mjs";

export default class ProjectService {
    static async addProject(project) {
        return Container.getItem('projectModel').create(project);
    };

    static async findByName(name) {
        return Container.getItem('projectModel').findOne({
            where: { name },
        });
    };

    static async findAll() {
        return Container.getItem('projectModel').findAll();
    };

    static async deleteById(id) {
        return Container.getItem('projectModel').destroy({
            where: { id },
        });
    };

    static async findByUserId(userId) {
        return Container.getItem('projectModel').findOne({
            where: { userId },
        });
    };
}
