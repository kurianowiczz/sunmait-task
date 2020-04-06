import express from 'express';
import auth from './auth.mjs';
import profile from './profile.mjs';
import project from './project.mjs';

const router = express.Router();

router.use('/', auth);
router.use('/', profile);
router.use('/project', project);

export default router;
