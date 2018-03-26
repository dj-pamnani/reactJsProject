import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Component1 from './comp1';
import LoginPage from './containers/Login/Login';
import { BrowserRouter, Link } from 'react-router-dom';
import {Route} from 'react-router-dom';

class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {/* TODO */}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}



// ========================================
class SuccessPage extends React.Component{
  constructor(props){
    super(props);
    this.isFlag = true;
    this.state={
      flag: true,
      userData:'',
      errorData:[]
    };
    this.setFlag  = this.setFlag.bind(this);
   
  }
  setFlag(flg){
    this.setState({
      flag: flg
    });
  }
  getUserData = (usrData)=>{
    this.setState({
      userData:usrData
    });
  }
  getErrorData = (errData)=>{
    this.setState({
      errorData:errData
    });
  }
  render(){
  
    return(
      <div>
        <p className='heading'>
          Welcome!
        </p>
        <p>
        {this.state.errorData.password}
        </p>
        {console.log('eeee',this.state.errorData.password)}
        {/* {  this.state.errors.map=(err)=>{
          return(
            <p>err.password</p>
          );
        }} */}
          
        { this.state.flag &&  <LoginPage getError = {this.getErrorData} userData={this.getUserData} flag = {this.setFlag} />} 
    {!this.state.flag  && <Component1 data = {this.state.userData} />  }
        {/* <Route path="/comp1" exact component={Component1} ></Route> */}
        
      </div>
    );
  }
}
ReactDOM.render(
  <BrowserRouter >
  {/* <div> */}
  <SuccessPage/>
  
    {/* <Game />,  */}
  {/* </div>, */}
  </BrowserRouter >,
  document.getElementById('root')
);
