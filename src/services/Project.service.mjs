import Container from "../utils/Container.mjs";

export default class ProjectService {
    static async addProject(project) {
        return Container.getItem('projectModel').create(project);
    };

    static async findByName(name) {
        return Container.getItem('projectModel').findOne({
            where: {name},
        });
    };

    static async findById(id) {
        return Container.getItem('projectModel').findOne({
            where: { id },
        });
    };

    static async findAll() {
        return Container.getItem('projectModel').findAll();
    };

    static async deleteById(id) {
        return Container.getItem('projectModel').destroy({
            where: {id},
        });
    };

    static async findByUserId(userId) {
        return Container.getItem('projectModel').findOne({
            where: {userId},
        });
    };

    static async findAllById(userId) {
        return Container.getItem('projectModel').findAll()
            .then(all => {
                console.log(all);
                return all.filter(el => el.dataValues.userId === userId);
            });
    };
}
