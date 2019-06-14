import React from 'react';
import { hydrate } from 'react-dom';
import Template from './index.jsx';

hydrate(document.querySelector('#root'), <Template />);
