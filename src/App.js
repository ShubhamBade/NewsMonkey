import './App.css';
import NavBar from './component/NavBar';

import React, { Component } from 'react'
import News from './component/News';

export default class App extends Component {
  render() {
    return (
      <>
      <NavBar/>
      <News country="in"/>
      </>
    )
  }
}

