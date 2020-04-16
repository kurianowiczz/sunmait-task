'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    description: DataTypes.STRING,
    date: DataTypes.DATE,
    taskId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Comment.associate = function(models) {
      Comment.belongsTo(models.Task, {
          foreignKey: 'taskId',
          onDelete: 'CASCADE',
      });
      Comment.belongsTo(models.User, {
          foreignKey: 'userId',
          onDelete: 'CASCADE',
      });
  };
  return Comment;
};
