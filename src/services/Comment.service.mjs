import Container from "../utils/Container.mjs";

export default class CommentService {
    static async addComment(comment) {
        return Container.getItem('commentModel').create(comment);
    };

    static async findAll() {
        return Container.getItem('commentModel').findAll();
    };

    static async findById(id) {
        return Container.getItem('commentModel').findOne({ id });
    };

    static async deleteById(id) {
        return Container.getItem('commentModel').destroy({
            where: { id },
        });
    };
}
