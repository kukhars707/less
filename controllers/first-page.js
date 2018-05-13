const newsModel = require('../models/news-block');
const calendarModel = require('../models/calendar');
const personeModel = require('../models/person');

module.exports = {
    getNewsBlock: async (req, res, next) => {
        const news = await newsModel.find().sort({$natural: -1}).limit(4);

        if (!news) {
            return next({
                staus: 400,
                message
            })
        }

        req.news = news;
        next();
    },

    getEventBlock: async (req, res, next) => {
        const event = await calendarModel.find().sort({$natural: -1}).limit(4);

        if (!event) {
            return next({
                status: 400,
                message
            })
        }

        req.event = event;
        next();
    },

    getPersoneBlock: async (req, res, next) => {
        const persone = await personeModel.find();

        if (!persone) {
            return next({
                status: 400,
                message
            })
        }

        req.persone = persone;
        next();
    },
 
    renderFirstPage: (req, res) => {
        res.render('index', {
            news: req.news,
            event: req.event,
            persone: req.persone
        });
    }
}