export default (sequelize, DataTypes) => {
    const Task = sequelize.define('Task', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status: {
            // TODO bash script to load enum
            type: DataTypes.ENUM('waiting', 'implementation', 'verifying', 'releasing'),
            allowNull: false,
        },
        deadline: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    }, {
        timestamps: false,
    });

    return Task;
};
