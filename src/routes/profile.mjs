import express from 'express';
import middleware from "../middleware/index.mjs";
import projectService from "../services/Project.service.mjs";

const router = express.Router();

router.get('/profile', middleware.isLogin, async (req, res) => {
    console.log('4. token in profile.js', req.header('token') || req.query['token']);
    const allProjects = await projectService.findByUserId(req.user.id);
    res.render('profile', {
        allProjects: allProjects,
        user: req.user,
        token: req.header('token') || req.query['token'],
    });
});

export default router;
