const db = require('../../m');

class CommentService {
    static async addComment(comment) {
        return db['User'].create(comment);
    };

    static async findAll() {
        return db['User'].findAll();
    };

    static async findById(id) {
        return db['User'].findOne({ id });
    };

    static async findAllById(taskId) {
        return db['User'].findAll()
            .then(all => {
                console.log(all);
                return all.filter(el => el.dataValues.taskId === taskId);
            });
    };

    static async deleteById(id) {
        return db['User'].destroy({
            where: { id },
        });
    };
}

module.exports = CommentService;
