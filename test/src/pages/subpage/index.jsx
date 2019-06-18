import { hot } from 'react-hot-loader';
import React from 'react';
import { Title, Meta } from '../../../../document';

export default hot(module)(App);

function App() {
  return <div>
    <Title>Subpage</Title>
    <Meta name="description" content="index page" />
    <h1>Subpage</h1>
  </div>;
}