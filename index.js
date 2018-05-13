const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bluebird = require('bluebird');

const config = require('./config');

const firstPageRoute = require('./routes/first-page');
const newsRoute = require('./routes/news-block');
const calendarRoute = require('./routes/calendar');
const personeRoute = require('./routes/persone');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

mongoose.Promise = bluebird;
mongoose.connect(config.database, err => {
    if (err) {
        throw err
    }

    console.log('Connect to database');
});

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(firstPageRoute);
app.use(calendarRoute);
app.use(personeRoute);
app.use(newsRoute);
app.use(errorHandler.errorHandler);


app.get('/', (req, res) => {
    res.render('index');
});

app.listen(config.port, () => console.log(`Server start ${config.port} port`));