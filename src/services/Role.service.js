const db = require('../../m');

class RoleService {
    static async addRole(role) {
        return db['User'].create(role);
    };

    static async findAll() {
        return db['Role'].findAll();
    };

    static async findById(id) {
        return db['User'].findOne({
            where: { id },
        });
    };

    static async deleteById(id) {
        return db['User'].destroy({
            where: { id },
        });
    };
}

module.exports = RoleService;
