'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.STRING,
    deadline: DataTypes.DATE,
    projectId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Task.associate = function(models) {
      Task.hasMany(models.Comment, {
          foreignKey: 'taskId',
          onDelete: 'CASCADE',
      });
      Task.belongsTo(models.Project, {
          foreignKey: 'projectId',
          onDelete: 'CASCADE',
      });
      Task.belongsTo(models.User, {
          foreignKey: 'userId',
          onDelete: 'CASCADE',
      });
  };
  return Task;
};
