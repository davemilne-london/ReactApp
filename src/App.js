// src/components/App.js
import React, { Component } from 'react';
import User from './components/User';
import Navbar from './components/Navbar';

class App extends Component {
  state = {
    userA: {
      firstName: "Harper",
      avatarUrl: "https://www.refreshmiami.com/wp-content/uploads/2018/07/55085_logo-ironhack.png"
    },
    userB: {
      firstName: "Ana",
      avatarUrl: "https://s3.amazonaws.com/owler-image/logo/ironhack_owler_20180828_221413_original.png"
    },
    clickCount: 0,
    backColor: 'yellow',
    bootcamp: 'Ironhack'
  };

  colorMapper = () => {
    const hexColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return hexColor;
  };

  clickHandler = () => {
    this.setState( { clickCount : this.state.clickCount + 1 } );
    
    /* YOUR CODE HERE */
  };

  render() {
    return (     
      <div className="App">

        <Navbar />
        
        <h1>React = state and props</h1>
        <p>Count is: {this.state.clickCount}</p>
        <button onClick={this.clickHandler}> Click me </button>

        <User
          theColor={this.state.backColor}
          firstName={this.state.userA.firstName}
          image={this.state.userA.avatarUrl}
          bootcamp={this.state.bootcamp}
           />
        <User 
          firstName={this.state.userB.firstName}
          image={this.state.userB.avatarUrl}
          bootcamp={this.state.bootcamp}
           />
      </div>
    );
  }
}

export default App;
