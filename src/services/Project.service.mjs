import Container from "../utils/Container.mjs";

export default class ProjectService {
    static async addProject(project) {
        return Container.getItem('projectModel').create(project);
    };

    static async findProjectByName(name) {
        return Container.getItem('projectModel').findOne({ name });
    };

    static async findAll() {
        return Container.getItem('projectModel').findAll();
    };

    static async deleteById(id) {
        return Container.getItem('projectModel').destroy({
            where: { id },
        });
    };
}
