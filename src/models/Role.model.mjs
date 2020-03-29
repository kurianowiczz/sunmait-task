export default (sequelize, DataTypes) => {
    const Role = sequelize.define('Role', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.ENUM('Developer', 'Manager'),
            allowNull: false,
        },
    }, {
        timestamps: false,
    });

    return Role;
};
