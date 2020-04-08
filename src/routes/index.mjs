import express from 'express';
import auth from './auth.mjs';
import profile from './profile.mjs';
import project from './project.mjs';
import task from './task.mjs';

const router = express.Router();

router.use('/', auth);
router.use('/', profile);
router.use('/project', project);
router.use('/task', task);

export default router;
