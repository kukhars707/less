const newsBlock = require('../models/news-block');

module.exports = {
    addNews: async (req, res, next) => {
        const body = req.body;
        let news;

        try {
            news = await newsBlock.create(body);
        } catch ({ message }) {
            return next({
                status: 400,
                message
            })
        }

        res.json(news);
    },

    deleteNews: async (req, res, next) => {
        const article = newsBlock.findById(req.params.id);
        let oneNews; 

        try {
            oneNews = await article.remove();
        } catch ({message}) {
            return next({
                status: 400,
                message
            })
        }
    
        console.log(article);
        console.log(oneNews);
        res.json(oneNews);
    }
};