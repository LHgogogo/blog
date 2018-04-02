import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
ReactDOM.render(<App />, document.getElementById('root'));
const $ = require('jquery');
$('.lh').html('这也是首页的内容，boom!!!');
$('.lh').css('background-color', 'red');