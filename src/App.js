import React, { Component } from 'react';
import './App.css';
import { Kpi } from '@gooddata/react-components';
import { CatalogHelper } from '@gooddata/react-components';
import catalogJson from './catalog.json';
import Header from './Header.js'

const C = new CatalogHelper(catalogJson);
const measureId = C.metric('Amount');


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title={"GoodData"}/>
        <Kpi
          projectId="la84vcyhrq8jwbu4wpipw66q2sqeb923"
          measure={measureId} />
      </div>
    );
  }
}

export default App;
