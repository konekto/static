# Static 
A static site builder based on bundler and reenact

## Getting started

First install wit `npm i -g @konekto/static`.
Then build the site using `static build <src> <dest>`.

## Page structure
`static` will compile every directory containing these files:

- `index.jsx`: will be converted to `index.html` with the bundled scripts and styles
- `client.jsx`: will be the bundled `client.js`
- `styles.styl`: will automatically be loader and compiled to `client.css` 

See the example folder for a better idea of how the page are structured.
Run `static serve example\pages build` to see the example in action.

## Document Head

For the document head `static` provides a React library based on `react-helmet`.
```jsx
import React from 'react';
import { Title, Meta } from '@koenkto/static/document';

export default function App() {
  return <div>
    <Title>Hi</Title>
    <Meta name="description" content="start page" />
    <h1>Hello World!</h1>
  </div>;
}
```

## Dev Server
`static` includes a dev server with hot-relaoding support for development.
Just use the command `static serve <src> <dest>`. 





