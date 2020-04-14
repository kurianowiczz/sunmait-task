const express = require('express'),
    auth = require('./auth'),
    profile = require('./profile'),
    project = require('./project'),
    task = require('./task');

const router = express.Router();

router.use('/', auth);
router.use('/', profile);
router.use('/project', project);
router.use('/task', task);

module.exports = router;
