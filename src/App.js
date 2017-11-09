import React, { Component } from 'react';
import './App.css';
import Header from './Header.js'
import Metric from './Metric.js'

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
        <WithProject projectId="la84vcyhrq8jwbu4wpipw66q2sqeb923">
          <Metric metric='Amount' label='Sales Amount'/>
          <Metric metric='Ending Pipeline' />
        </WithProject>
      </div>
    );
  }
}

export default App;
