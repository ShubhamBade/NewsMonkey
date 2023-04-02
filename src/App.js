import './App.css';
import NavBar from './component/NavBar';

import React, { Component } from 'react'
import News from './component/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';


export default class App extends Component {
  render() {
    return (
      <>
      <Router>
      <NavBar/>
        <Routes>
          <Route exact path="/" element={<News key="general" country="in" category="general"/>}></Route>
          <Route exact path="/business" element={<News key="business" country="in" category="business"/>}></Route>
          <Route exact path="/entertainment" element={<News key="entertainment" country="in" category="entertainment"/>}></Route>
          <Route exact path="/general" element={<News key="general" country="in" category="general"/>}></Route>
          <Route exact path="/health" element={<News key="health" country="in" category="health"/>}></Route>
          <Route exact path="/science" element={<News key="science" country="in" category="science"/>}></Route>
          <Route exact path="/sports" element={<News key="sports" country="in" category="sports"/>}></Route>
          <Route exact path="/technology" element={<News key="technology" country="in" category="technology"/>}></Route>
        </Routes>
      </Router>
      </>
    )
  }
}

