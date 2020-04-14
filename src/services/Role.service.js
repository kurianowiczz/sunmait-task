const Container = require('../utils/Container');

class RoleService {
    static async addRole(role) {
        return Container.getItem('roleModel').create(role);
    };

    static async findAll() {
        return Container.getItem('roleModel').findAll();
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
