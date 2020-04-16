'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Project.associate = function(models) {
      Project.belongsTo(models.User, {
          foreignKey: 'userId',
          onDelete: 'CASCADE',
      });
      Project.hasMany(models.Task, {
          foreignKey: 'projectId',
          onDelete: 'CASCADE',
      });
  };
  return Project;
};
