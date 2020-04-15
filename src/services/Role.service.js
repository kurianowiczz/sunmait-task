const Container = require('../utils/Container');
const db = require('../models/index');

class RoleService {
    static async addRole(role) {
        return Container.getItem('roleModel').create(role);
    };

    static async findAll() {
        return db['Role'].findAll();
    };

    static async findById(id) {
        return Container.getItem('roleModel').findOne({
            where: { id },
        });
    };

    static async deleteById(id) {
        return Container.getItem('roleModel').destroy({
            where: { id },
        });
    };
}

module.exports = RoleService;
