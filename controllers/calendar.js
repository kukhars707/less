const calendar = require('../models/calendar');

module.exports = {

    getOneEvent: async (req, res, next) => {
        const oneEvent = await calendar.findById(req.params.id);

        if(!oneEvent) {
            return next({
                status: 400,
                message
            })
        }

        res.render('calendar-post', {
            post: oneEvent
        })
    },

    getEvent: async (req, res, next) => {
        const perPage = 4;
        const page = req.params.page;

        await calendar.find().sort({$natural: -1}).skip(perPage * page - perPage).limit(perPage).exec(function (err, post) {
            calendar.count().exec(function (err, count) {
                if(err) {
                    return next({
                        status: 400,
                        message
                    })
                }

                res.render('calendar', {
                    calendarPage: post,
                    current: page,
                    pages: Math.ceil(count / perPage)
                });
            })
        });
    },

    addEvent: async (req, res, next) => {
        const body = req.body;
        let event;

        try {
            event = await calendar.create(body);
        } catch ({ message }) {
            return next({
                status: 400,
                message
            })
        }

        res.json(event);
    },
    
    deleteEvent: async (req, res, next) => {
        const article = calendar.findById(req.params.id);
        let event;

        try {
            event = await article.remove();
        } catch ({message}) {
            return next({
                status: 400,
                message
            });
        }

        res.json(event);

    }
}