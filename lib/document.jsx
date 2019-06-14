import React from 'react';
import Helmet from 'react-helmet';

export function collectStatic() {
  const helmet = Helmet.renderStatic();
  return {
    htmlAttributes: helmet.htmlAttributes.toString(),
    title: helmet.title.toString(),
    meta: helmet.meta.toString(),
    link: helmet.link.toString(),
    bodyAttributes: helmet.bodyAttributes.toString(),
  }
}

export function Html(props) {
  return <Helmet><html {...props} /></Helmet>
}

export function Meta(props) {
  return <Helmet><meta {...props} /></Helmet>
}

export function Title(props) {
  return <Helmet><title {...props} /></Helmet>
}

export function Link(props) {
  return <Helmet><link {...props} /></Helmet>
}

export function Style(props) {
  return <Helmet><style {...props} /></Helmet>
}

export function Script(props) {
  return <Helmet><script {...props} /></Helmet>
}

export function NoScript(props) {
  return <Helmet><noscript {...props} /></Helmet>
}

export function Body(props) {
  return <Helmet><body {...props} /></Helmet>
}