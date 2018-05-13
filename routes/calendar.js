const express = require('express');

const calendar = require('../controllers/calendar');

const router = express.Router();

router.post('/add-event', calendar.addEvent);
router.delete('/delete-event/:id', calendar.deleteEvent);

module.exports = router;