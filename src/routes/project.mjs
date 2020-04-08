import express from 'express';
import middleware from "../middleware/index.mjs";
import helpers from "../helpers/index.mjs";
import projectService from '../services/Project.service.mjs';
import taskService from '../services/Task.service.mjs';

const router = express.Router();

router.get('/add', middleware.isLogin, async (req, res) => {
    res.render(...helpers.withParamToken('addProject', req));
});

router.post('/add', middleware.isLogin, async (req, res) => {
    const { name } = req.body;
    const userId = req.user.id;
    const newProject = await projectService.addProject({ name, userId: +userId });
    res.redirect(...helpers.withToken('/profile', req));
});

router.get('/:projectId', middleware.isLogin, async (req, res) => {
    const project = await projectService.findById(req.params.projectId);
    const allTasks = await taskService.findAllById(project.id);
    res.render(...helpers.withParamToken('project', req, { project: project, allTasks }));

});

export default router;
