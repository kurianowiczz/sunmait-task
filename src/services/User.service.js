const db = require('../../m');

class UserService {
    static async addUser(user) {
        return db['User'].create(user);
    };

    static async findUserByEmail(email) {
        return db['User'].findOne({
            where: { email },
        });
    };

    static async deleteById(id) {
        return db['User'].destroy({
            where: { id },
        });
    };
}

module.exports = UserService;
