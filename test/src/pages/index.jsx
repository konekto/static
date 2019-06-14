import { hot } from 'react-hot-loader';
import React from 'react';
import { Title, Meta } from '../../../lib/document.jsx';

export default hot(module)(App);

function App() {
  return <div>
    <Title>Hi</Title>
    <Meta name="description" content="start page" />
    <h1>Hello World!</h1>
    <a href="/subpage">subpage</a>
  </div>;
}