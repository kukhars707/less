const newsModel = require('../models/news-block');

module.exports = {

    getNews: async (req, res, next) => {
        const news = await newsModel.find();

        if(!news) {
            return next({
                status: 400,
                message
            })
        }

        res.render('index', news);
        // res.json(news);

    },

    addNews: async (req, res, next) => {
        const body = req.body;
        let news;

        try {
            news = await newsModel.create(body);
        } catch ({ message }) {
            return next({
                status: 400,
                message
            })
        }

        res.json(news);
    },

    deleteNews: async (req, res, next) => {
        const article = newsModel.findById(req.params.id);
        let oneNews; 

        try {
            oneNews = await article.remove();
        } catch ({message}) {
            return next({
                status: 400,
                message
            })
        }
    
        res.json(oneNews);
    }
};