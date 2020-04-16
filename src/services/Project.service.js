const db = require('../../m');

class ProjectService {
    static async addProject(project) {
        return db['User'].create(project);
    };

    static async findByName(name) {
        return db['User'].findOne({
            where: {name},
        });
    };

    static async findById(id) {
        return db['User'].findOne({
            where: { id },
        });
    };

    static async findAll() {
        return db['User'].findAll();
    };

    static async deleteById(id) {
        return db['User'].destroy({
            where: {id},
        });
    };

    static async findByUserId(userId) {
        return db['User'].findOne({
            where: {userId},
        });
    };

    static async findAllById(userId) {
        return db['User'].findAll()
            .then(all => {
                console.log(all);
                return all.filter(el => el.dataValues.userId === userId);
            });
    };
}

module.exports = ProjectService;
