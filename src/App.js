import React, { Component } from 'react';
import './App.css';
import Header from './Header.js'
import Metric from './Metric.js'
import Metric2 from './Metric2.js'

const WithProject = (props) => {
  return (
    <div> {
      React.Children.map(props.children,
        (child) => React.cloneElement(child, {project: props.projectId})
      )
    } </div>
  )
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title={"GoodData"}/>
        <WithProject projectId="asl50ejeo8bzp97i9pxlbcm3vkuvzy72">
          <Metric2 metric='# of Active Accounts - Last 7 Days' label='Active Accounts - 7 Days'/>
          <Metric2 metric='Ending Pipeline' />
          <Metric2 metric='Lost' />
        </WithProject>
      </div>
    );
  }
}

export default App;
