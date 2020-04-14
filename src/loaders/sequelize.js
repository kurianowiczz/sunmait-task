const Sequelize = require('sequelize'),
    config = require('../config'),
    loadTask = require('../models/Task.model'),
    loadUser = require('../models/User.model'),
    loadComment = require('../models/Comment.model'),
    loadProject = require('../models/Project.model'),
    loadRole = require('../models/Role.model'),
    Container = require('../utils/Container');

module.exports = async () => {
    const sequelize = new Sequelize(config.databaseConnection);
    sequelize.authenticate();
    const Role = loadRole(sequelize, Sequelize);
    const User = loadUser(sequelize, Sequelize);
    const Task = loadTask(sequelize, Sequelize);
    const Comment = loadComment(sequelize, Sequelize);
    const Project = loadProject(sequelize, Sequelize);

    Role.hasMany(User, {foreignKey: 'roleId'});
    User.hasMany(Task, {foreignKey: 'userId'});
    Project.hasMany(Task, {foreignKey: 'projectId'});
    User.hasMany(Project, {foreignKey: 'userId'});
    User.hasMany(Comment, {foreignKey: 'userId'});
    Task.hasMany(Comment, {foreignKey: 'taskId'});

    await sequelize.sync({ force: false });

    Container.setItem('userModel', User);
    Container.setItem('roleModel', Role);
    Container.setItem('taskModel', Task);
    Container.setItem('commentModel', Comment);
    Container.setItem('projectModel', Project);
    Container.setItem('sequelize', sequelize);

    return sequelize;
};


