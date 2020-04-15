'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.ENUM('waiting', 'implementation', 'verifying', 'releasing'),
    deadline: DataTypes.DATE
  }, {});
  Task.associate = (models) => {
      Task.hasMany(models.User, {
          foreignKey: 'userId',
          onDelete: 'CASCADE',
      });
      Task.hasMany(models.Project, {
          foreignKey: 'projectId',
          onDelete: 'CASCADE',
      });

  };
  return Task;
};
