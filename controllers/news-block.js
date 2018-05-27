const newsModel = require('../models/news-block');

module.exports = {

    getOneNews: async (req, res, next) => {
      const findOneNews = await newsModel.findById(req.params.id);

      if (!findOneNews) {
          return next({
              status: 400,
              message
          })
      }

      console.log(findOneNews);
      res.json(findOneNews)

    },

    getNews: async (req, res, next) => {
        const perPage = 4;
        const page = req.params.page;

        await newsModel.find().sort({$natural: -1}).skip(perPage * page - perPage).limit(perPage).exec(function (err, post) {
            newsModel.count().exec(function (err, count) {
                if(err) {
                    return next({
                        status: 400,
                        message
                    })
                }

                res.render('news', {
                    newsPage: post,
                    current: page,
                    pages: Math.ceil(count / perPage)
                });
            })
        });

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