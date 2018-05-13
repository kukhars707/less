const express = require('express');

const firstPageController = require('../controllers/first-page');

const router = express.Router();

router.get('/', firstPageController.getNewsBlock,
                firstPageController.getEventBlock, 
                firstPageController.getPersoneBlock,
                firstPageController.renderFirstPage
            );

module.exports = router;