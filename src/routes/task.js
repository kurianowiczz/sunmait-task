const express = require('express'),
    middleware = require('../middleware'),
    helpers = require('../helpers'),
    commentService = require('../services/Comment.service'),
    taskService = require('../services/Task.service');

const router = express.Router();

router.get('/:projectId/add', middleware.isLogin, async (req, res) => {
    res.render(...helpers.withParamToken('addTask', req, { projectId: req.params.projectId }));
});

router.post('/:projectId/add', middleware.isLogin, async (req, res) => {
    const { name, description, status, deadline } = req.body;
    const projectId = req.params.projectId;
    const userId = req.user.id;
    const newTask = await taskService.addTask({ name, description, status, deadline: new Date(deadline),
        projectId: +projectId, userId: +userId });
    res.redirect(...helpers.withToken('/project', req));
});

router.get('/:taskId', middleware.isLogin, async (req, res) => {
    const task = await taskService.findById(req.params.taskId);
    const allComments = await commentService.findAllById(task.id);
    res.render(...helpers.withParamToken('task', req, { task: task, allComments }));
});

module.exports = router;
