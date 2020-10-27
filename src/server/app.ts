import express, { Application } from 'express';
import bodyParser from 'body-parser';
import boom from 'express-boom';
import morgan from 'morgan';
import unless from '@app/server/middleware/unless';
import mongoose from 'mongoose';

import { apiHomeRouter } from '@app/server/routes/api-home';

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });

export const app: Application = express();

// middleware for error reporting
app.use(boom());

// middleware for HTTP request logging
app.use(unless('/api/health-check', morgan('tiny')));

app.use(bodyParser.urlencoded({ extended: true }));

// middleware for json body parsing
app.use(bodyParser.json({ limit: '500mb' }));

// enable cors for all origins
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Expose-Headers', 'x-total-count');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
  res.header('Access-Control-Allow-Headers', 'Content-Type,authorization');

  next();
});

app.use('/api/', apiHomeRouter);

app.use((req, res) => {
  res.boom.notFound(); // Responds with a 404 status code
});
