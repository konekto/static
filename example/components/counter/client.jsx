import React, { Component } from 'react';
import Template from './index.jsx';


export default class CounterController extends Component {

  state = { count: 0 };

  componentDidMount() {
    setInterval(() => this.setState({ count: this.state.count + 1 }), 1000);
  }

  render() {
    return <Template {...this.props} {...this.state} />;
  }
}