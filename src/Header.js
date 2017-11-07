import logo from './logo.svg';
import React from 'react';

export default (props) => (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">{props.title}</h1>
    </header>
)
