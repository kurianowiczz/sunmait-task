import Container from "../utils/Container.mjs";

export default class UserService {
    static async addUser(user) {
        return Container.getItem('userModel').create(user);
    };

    static async findUserByEmail(email) {
        return Container.getItem('userModel').findOne({
            where: { email },
        });
    };

    static async deleteById(id) {
        return Container.getItem('userModel').destroy({
            where: { id },
        });
    };
}
