require('dotenv').config();
//const cookieParser = require('cookie-parser');
const express = require('express');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const helmet = require('helmet');
const routes = require('./routes');
const cors = require('cors');
//const cookieSession = require('cookie-session');

const { requestLogger, errorLogger } = require('./middlewares/logger');
const { errorHandler } = require('./middlewares/error');

//  const body Parser = require('body-parser');

const app = express();

app.use(express.json());

const { PORT = 3000 } = process.env;

mongoose.connect('mongodb://127.0.0.1:27017/mestodb', {
  useNewUrlParser: true,
});
app.use(cors({
  credentials: true,
  origin: ['https://mesto-practicum.nomoredomains.xyz', 'http://mesto-practicum.nomoredomains.xyz', 'http://localhost:3000', 'http://localhost:3000', 'http://localhost:3001', 'https://api.mesto-practicum.nomoredomains.sbs'],
}));
/*
app.use(
  cookieSession({
    secret: 'yourSecret',
    sameSite: false,
    secure: false,
    httpOnly: false,
  }),
);
*/
//  app.use(bodyParser.json());
//app.use(cookieParser());

app.use(requestLogger);
app.use(routes);

app.use(errorLogger);
app.use(errors());
app.use(errorHandler);
app.use(helmet());

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
