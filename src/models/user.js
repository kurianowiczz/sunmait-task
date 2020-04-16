'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    roleId: DataTypes.INTEGER
  }, {});
  User.associate = function(models) {
      User.hasMany(models.Task, {
          foreignKey: 'userId',
          onDelete: 'CASCADE',
      });
      User.hasMany(models.Project, {
          foreignKey: 'userId',
          onDelete: 'CASCADE',
      });
      User.hasMany(models.Comment, {
          foreignKey: 'userId',
          onDelete: 'CASCADE',
      });
      User.belongsTo(models.Role, {
          foreignKey: 'roleId',
          onDelete: 'CASCADE',
      });
  };
  return User;
};
