const express = require('express');
const path = require('path');
const cors = require('cors');

const api = require('./api');
const logger = require('./logger');
const { APP_PORT, FRONT_URL } = require('./config');
const parseApi = require('./middleware/parse');
// const parseSandbox = require('./middleware/parseSandbox');
const parseDashboard = require('./middleware/parseDashboard');
const parseSwagger = require('./middleware/parseSwagger');

const app = express();


app.use(express.json());

const corsOptions = {
  origin: FRONT_URL,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Serve the Parse API at /parse URL prefix
app.use('/parse', parseApi);
// Disable don't work correctly with parseApi for the moment
// app.use('/parse-sandbox', parseSandbox);
app.use('/dashboard', parseDashboard);
app.use(parseSwagger);

// handle all routing for /api/*
api(app);

// Serve any static files
app.use(express.static(path.join(__dirname, './../build')));

// Handle React routing, return all requests to React app
app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, './../build', 'index.html'));
});

const port = APP_PORT || 1337;

app.listen(port, () => {
  logger(`connect running on port ${port}.`);
});
