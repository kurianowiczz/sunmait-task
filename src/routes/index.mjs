import express from 'express';
import auth from './auth.mjs';

const router = express.Router();

router.use('/', auth);

export default router;
