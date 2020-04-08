import express from "express";
import middleware from "../middleware/index.mjs";
import helpers from "../helpers/index.mjs";
import taskService from "../services/Task.service.mjs";

const router = express.Router();

router.get('/:projectId/add', middleware.isLogin, async (req, res) => {
    res.render(...helpers.withParamToken('addTask', req, { projectId: req.params.projectId }));
});

router.post('/:projectId/add', middleware.isLogin, async (req, res) => {
    const { name, description, status, deadline } = req.body;
    const projectId = req.params.projectId;
    console.log('project - ' + projectId);
    const userId = req.user.id;
    console.log(userId);
    console.log('reqqqqqq - ' + JSON.stringify(req.params));
    const newTask = await taskService.addTask({ name, description, status, deadline: new Date(deadline),
        projectId: +projectId, userId: +userId });
    res.redirect(...helpers.withToken('/project', req));
});

export default router;
