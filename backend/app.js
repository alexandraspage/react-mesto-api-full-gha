const cookieParser = require('cookie-parser');
const express = require('express');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const helmet = require('helmet');
const routes = require('./routes');

const { errorHandler } = require('./middlewares/error');
const { requestLogger, errorLogger } = require('./middlewares/logger');

//  const body Parser = require('body-parser');

const app = express();

app.use(express.json());

const { PORT = 3000 } = process.env;

mongoose.connect('mongodb://127.0.0.1:27017/mestodb', {
  useNewUrlParser: true,
});

//  app.use(bodyParser.json());
app.use(requestLogger);
app.use(cookieParser());

app.use(routes);
app.use(errorLogger);
app.use(errors());
app.use(errorHandler);
app.use(helmet());

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
