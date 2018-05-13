const express = require('express');

const personeController = require('../controllers/persone');

router = express.Router();

router.post('/add-persone', personeController.addPersone);
router.delete('/delete-persone/:id', personeController.deletePersone);

module.exports = router;