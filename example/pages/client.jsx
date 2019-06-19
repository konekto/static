import React from 'react';
import { hydrate } from 'react-dom';
import App from './index.jsx';


hydrate(<App />, document.querySelector('#root'));
