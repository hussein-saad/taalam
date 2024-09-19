const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');

const CustomError = require('./utils/CustomError');
const globalErrorHandler = require('./controllers/errorController');

const userRouter = require('./routes/userRouter');
const setupSwaggerDocs = require('./utils/swagger');

const app = express();

app.use(express.json({ limit: '250kb' }));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(cookieParser());
app.use(compression());

setupSwaggerDocs(app);
app.use('/api/v1/users', userRouter);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.all('*', (req, res, next) => {
  next(new CustomError(`${req.originalUrl} NOT FOUND`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
