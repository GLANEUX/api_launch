const express = require('express');
const router = express.Router();

const launchController = require('../controllers/launchController');


// /launches
router
    .route('/')
    .get(launchController.listAllLaunches)
    .post(launchController.createALaunch)

module.exports = router;
