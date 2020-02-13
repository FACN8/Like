const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const compression = require('compression');
const fs = require('fs');
const path = require('path');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const routes = require('./controllers/index.js');
const app = express();

app.use(helmet()); // protect the f**king server
app.use(cors()); // will serve data for any kind of client-side applications
app.use(compression()); //make requests lighter and load faster

// create a write stream in append mode
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, '..', 'logs', 'access.log'),
  { flag: 'a' }
);
// setup morgan logger in 'combined' and stream data to the write stream
app.use(morgan('combined', { stream: accessLogStream }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '..', 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine(
  'hbs',
  exphbs({
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials'),
    defaultLayout: 'main'
  })
);

app.set('port', process.env.PORT || 5577);
app.use(routes);

module.exports = app;
