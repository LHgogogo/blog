import React, { Component } from 'react';
import Button from 'antd/lib/button';
import '../css/App.css';

class App extends Component {
  handleClick(type,e) {
    console.log(type);
    console.log(e);
    switch (type){
      case '1':
      window.location = '../index1.html';
      break;
      case '2':
      window.location = '../index2.html';
      break;
      case '3':
      alert('这是首页');
      break;
      default:
      break
    }
    
  }
  render() {
    return (
      <div className="App">
        <div>
          <Button className="btn" type="primary" data-type="1" onClick={this.handleClick.bind(this,'1')}>去app1</Button>
          <Button className="btn" type="dashed " data-type="2" onClick={this.handleClick.bind(this,'2')}>去app2</Button>
          <Button className="btn" type="danger" data-type="3" onClick={this.handleClick.bind(this,'3')}>这是首页</Button>
        </div>
      </div>
    );
  }
}

export default App;
