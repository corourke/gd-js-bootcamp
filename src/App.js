import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Kpi } from '@gooddata/react-components';
import { CatalogHelper } from '@gooddata/react-components';
import catalogJson from './catalog.json';

const C = new CatalogHelper(catalogJson);
const measureId = C.metric('Amount');


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Kpi
          projectId="la84vcyhrq8jwbu4wpipw66q2sqeb923"
          measure={measureId} />
      </div>
    );
  }
}

export default App;
