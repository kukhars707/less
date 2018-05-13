const express = require('express');

const NewsBlockController = require('../controllers/news-block');

const router = express.Router();

router.post('/add-news', NewsBlockController.addNews);
router.delete('/delete-news/:id', NewsBlockController.deleteNews);

module.exports = router;