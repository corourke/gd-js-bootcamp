import React, { Component } from 'react';
import './App.css';
import Header from './Header.js'
import Metric from './Metric.js'

const projectId="la84vcyhrq8jwbu4wpipw66q2sqeb923"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title={"GoodData"}/>
        <Metric project={projectId} metric='Amount' label='Sales Amount' />
      </div>
    );
  }
}

export default App;
