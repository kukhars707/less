const newsModel = require('../models/news-block');
const calendarModel = require('../models/calendar');
const personeModel = require('../models/person');

module.exports = {
    getNewsBlock: async (req, res, next) => {
        const news = await newsModel.find().lean().sort({$natural: -1}).limit(4);

        if (!news) {
            return next({
                staus: 400,
                message
            })
        }

        news.forEach(function(item){
            item.body = item.body.substring(0, 300);
            let d = item.date;
            let curr_date = d.getDate();
            let curr_month = d.getMonth() + 1;
            let curr_year = d.getFullYear();
            let finalDate = curr_date + '.' + curr_month + '.' + curr_year;
            item.date = finalDate;
        });

        req.news = news;
        next();
    },

    getEventBlock: async (req, res, next) => {
        const event = await calendarModel.find().lean().sort({$natural: -1}).limit(4);

        if (!event) {
            return next({
                status: 400,
                message
            })
        }

        event.forEach(function(item){
            item.body = item.body.substring(0, 300);
        });

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