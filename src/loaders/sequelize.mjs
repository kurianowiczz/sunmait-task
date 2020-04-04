import Sequelize from 'sequelize';
import config from "../config.mjs";
import loadTask from  '../models/Task.model.mjs';
import loadUser from  '../models/User.model.mjs';
import loadComment from  '../models/Comment.model.mjs';
import loadProject from  '../models/Project.model.mjs';
import loadRole from  '../models/Role.model.mjs';
import Container from "../utils/Container.mjs";

export default async () => {
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


