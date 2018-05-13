const calendar = require('../models/calendar');

module.exports = {
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

        console.log(article);
        console.log(event);
        res.json(event);

    }
}