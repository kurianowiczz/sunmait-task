const Container = require('../utils/Container');

class CommentService {
    static async addComment(comment) {
        return Container.getItem('commentModel').create(comment);
    };

    static async findAll() {
        return Container.getItem('commentModel').findAll();
    };

    static async findById(id) {
        return Container.getItem('commentModel').findOne({ id });
    };

    static async findAllById(taskId) {
        return Container.getItem('commentModel').findAll()
            .then(all => {
                console.log(all);
                return all.filter(el => el.dataValues.taskId === taskId);
            });
    };

    static async deleteById(id) {
        return Container.getItem('commentModel').destroy({
            where: { id },
        });
    };
}

module.exports = CommentService;
