'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    description: DataTypes.STRING,
    date: DataTypes.DATE
  }, {});
  Comment.associate = (models) => {
      Comment.hasMany(models.Task, {
          foreignKey: 'taskId',
          onDelete: 'CASCADE',
      });
      Comment.hasMany(models.User, {
          foreignKey: 'userId',
          onDelete: 'CASCADE',
      });
  };
  return Comment;
};
