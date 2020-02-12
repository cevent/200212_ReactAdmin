import React,{Component} from 'react';
import logo from '../logo.svg';

export default class APP extends Component{
  render(){

    return(
      <div>
        <img className='logo' src={logo} alt="logo"/>
        <p className='title'>React Component -APP组件</p>
      </div>
    )
  }
};

//可并入class，统一暴露
//export default App;