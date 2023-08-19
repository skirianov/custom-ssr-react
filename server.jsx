import '@babel/polyfill';
import '@babel/register';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { HomePage } from './app/pages';
import { document } from './app/document.js';
import path from 'path';

const fetch = require('node-fetch');
// import { getServerSideProps } from './app/pages';

const app = express();
const port = 3000;

app.use('/static', express.static(path.join(__dirname)));

app.get('/', async (req, res) => {
  const getServerSideProps = require('./app/pages').getServerSideProps;
  const initialData = await getServerSideProps(fetch);

  const htmlContent = renderToString(<HomePage {...initialData.props} />);
  const html = document(htmlContent, initialData.props);
  res.send(html);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
