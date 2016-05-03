import React, { Component } from 'react';

require('!style!css!sass!../style/main');

import Menu from './menu';
import Footer from './footer';

export default class App extends Component {
  render() {
    return (
      <div>
      	<Menu />
      	{this.props.children}
      	<Footer />
      </div>
    );
  }
}
