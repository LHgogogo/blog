import React, { Component } from 'react';
import Button from 'antd/lib/button';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleBack = this.handleBack.bind(this);
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
          <Button type="primary" onClick={this.handleBack}>回到首页</Button>
        </div>
      </div>
    );
  }
}

export default App;
