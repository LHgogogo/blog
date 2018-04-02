import React, { Component } from 'react';
import {Button} from 'antd';
import logo from './logo.svg';
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }
  handleClick(e) {
    window.location = '../index2.html';
  }
  handleBack(e) {
    window.location = '../index.html';
  }
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
        <div>
          <Button type="primary" onClick={this.handleClick}>去APP2</Button>
          <Button type="danger" onClick={this.handleBack}>回首页</Button>
        </div>
      </div>
    );
  }
}

export default App;
