export default (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.ENUM('Developer', 'Manager'),
            allowNull: false,
        },
    }, {
        timestamps: false,
    });

    return Comment;
};
