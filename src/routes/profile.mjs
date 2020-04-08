import express from 'express';
import middleware from "../middleware/index.mjs";
import projectService from "../services/Project.service.mjs";
import helpers from "../helpers/index.mjs";

const router = express.Router();

router.get('/profile', middleware.isLogin, async (req, res) => {
    const allProjects = await projectService.findAllById(req.user.id);
    res.render(...helpers.withParamToken('profile', req, { user: req.user, allProjects }));
});

export default router;
