import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoContainer from './todo-container';
// import {connect} from 'react-redux';
// import {someStuff} from '../actions';

class App extends Component {

  // componentWillMount() {
  //     this.props.dispatch(someStuff());
  // }

  // renderStuff = () => {
  //   return(
  //     this.props.list ? 
      
  //       this.props.list.map((item, id) => {
  //       return (
  //         <ul key={item.id} style={{backgroundColor: 'green', padding: '2rem' }}>
  //           <li>
  //             <p>{item.name}</p>
  //             <p>{item.age}</p>
  //           </li>
  //         </ul>
  //       )
  //     }) 
  //     : 'SLOVO'
  //   )
  // }

  render() {
    let collection = this.props.list;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">

          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <div style={{backgroundColor: 'red'}}>{this.renderStuff()}</div> */}
        <TodoContainer />
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     list: state.initialReducer.list
//   }
// }

export default App;
