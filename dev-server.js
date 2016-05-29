/* eslint-disable strict */
'use strict';

const _ = require('lodash');
const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config.dev');

const app = express();
const compiler = webpack(config);
const devMiddleware = require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
});

app.use(devMiddleware);
app.use(require('webpack-hot-middleware')(compiler));

app.use(function(req, res, next) {
  const reqPath = req.url;
  // find the file that the browser is looking for
  const file = _.last(reqPath.split('/'));
  if (['index.html'].indexOf(file) !== -1) {
    res.end(devMiddleware.fileSystem.readFileSync(path.join(config.output.path, file)));
  } else if (file.indexOf('.') === -1) {
    // if the url does not have an extension, assume they've navigated to something like /home and want index.html
    res.end(devMiddleware.fileSystem.readFileSync(path.join(config.output.path, 'index.html')));
  } else {
    next();
  }
});

/* eslint-disable no-console */
app.listen(process.env.WEBPACK_PORT, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:' + process.env.WEBPACK_PORT);
});
/* eslint-enable no-console */
