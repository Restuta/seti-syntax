'use strict'

var koa = require('koa');
var app = koa();

// x-response-time

function helloWorld() {}

app.use(function*(next) {
  var start = new Date();
  yield next;
  var ms = new Date() - start;
  this.set('X-Response-Time', ms + 'ms');
});

// logger

app.use(function*(next) {
  var start = new Date();
  yield next;
  var ms = new Date() - start;
  console.log('%s %s - %s', this.method, this.url, ms);
});

// response

app.use(function*() {
  this.body = 'Hello World';
});

app.listen(3000);

/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import {join} from 'path';
import {Router} from 'express';
import jade from 'jade';
import fm from 'front-matter';
import fs from '../utils/fs';

// A folder with Jade/Markdown/HTML content pages
const CONTENT_DIR = join(__dirname, './content');

const x = () => () => {
  const x = y
}

function foo(y) {
  const x = y

  return {
    bla: x,
    y,
    'hello': x,
    
  }
}

// Extract 'front matter' metadata and generate HTML
const parseJade = (path, jadeContent) => {
  const fmContent = fm(jadeContent);
  const htmlContent = jade.render(fmContent.body);
  return Object.assign({path, content: htmlContent}, fmContent.attributes);
};

const router = new Router();

router.get('/', async (req, res, next) => {
  try {
    let path = req.query.path;

    if (!path || path === 'undefined') {
      res
        .status(400)
        .send({error: `The 'path' query parameter cannot be empty.`});
      return;
    }

    let fileName = join(
      CONTENT_DIR,
      (path === '/' ? '/index' : path) + '.jade'
    );
    if (!await fs.exists(fileName)) {
      fileName = join(CONTENT_DIR, path + '/index.jade');
    }

    if (!await fs.exists(fileName)) {
      res.status(404).send({error: `The page '${path}' is not found.`});
    } else {
      const source = await fs.readFile(fileName, {encoding: 'utf8'});
      const content = parseJade(path, source);
      res.status(200).send(content);
    }
  } catch (err) {
    next(err);
  }
});

export default router;
