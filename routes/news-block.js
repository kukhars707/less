const express = require('express');

const NewsBlockController = require('../controllers/news-block');

const router = express.Router();

router.get('/news/:page', NewsBlockController.getNews);
router.get('/news-one/:id', NewsBlockController.getOneNews);
router.post('/add-news', NewsBlockController.addNews);
router.delete('/delete-news/:id', NewsBlockController.deleteNews);

module.exports = router;