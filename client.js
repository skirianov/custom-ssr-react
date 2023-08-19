// client.js
import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { HomePage } from './app/pages';

// Use the props sent from the server
const initialProps = window.__SSR_DATA__;

const domNode = document.getElementById('root');
hydrateRoot(domNode, <HomePage {...initialProps} />);
