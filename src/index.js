import React from 'react';
import ReactDOM from 'react-dom';
import APP from './components/app';
//引入css，React自动重新编译打包，并刷新
import './index.css';

ReactDOM.render(<APP/>,document.getElementById('root'));