const personeModel = require('../models/person');

module.exports = {
    addPersone: async (req, res, next) => {
        const body = req.body;
        let persone;

        try {
            persone = await personeModel.create(body);
        } catch ({message}) {
            return next({
                status: 400,
                message
            })
        }

        res.json(persone);

    },

    deletePersone: async (req, res, next) => {
        const personeDel = personeModel.findById(req.params.id);
        let personeOne;

        try {
            personeOne = await personeDel.remove();
        } catch ({message}) {
            return next({
                status: 400,
                message
            })
        }

        res.json(personeOne);
    }
}