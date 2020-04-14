const express = require('express'),
    middleware = require('../middleware'),
    projectService = require('../services/Project.service'),
    helpers = require('../helpers');

const router = express.Router();

router.get('/profile', middleware.isLogin, async (req, res) => {
    const allProjects = await projectService.findAllById(req.user.id);
    res.render(...helpers.withParamToken('profile', req, { user: req.user, allProjects }));
});

module.exports = router;
