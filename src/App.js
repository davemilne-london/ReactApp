// src/components/App.js
import React, { Component, useState } from 'react';
import User from './components/User';
import Navbar from './components/Navbar';
import MultiSelect from './components/MultiSelect';
import Course from './components/Course';
import Form from './components/forms/form';

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

        <Course />
        {/* <h1>React = state and props</h1>
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
           /> */}
      </div>
    );
  }
}

// function SelectManager() {

//   class optionObject {
//       constructor (optionValue, textValue, selected) {
//           this.optionValue = optionValue;
//           this.textValue = textValue;
//           this.selected = selected;
//       }
//   }

//   const arrOptions = [
//       new optionObject(1, "One", false),
//       new optionObject(2, "Two", false),
//       new optionObject(4, "Four", false),
//       new optionObject(5, "Five", false),
//       new optionObject(6, "Six", false),
//       new optionObject(7, "Seven", false),
//       new optionObject(8, "Eight", false),
//       new optionObject(9, "Nine", false),
//       new optionObject(10, "Ten", false),
//       new optionObject(11, "Eleven", false),
//       new optionObject(12, "Twelve", false),
//       new optionObject(13, "Thirteen", false),
//       new optionObject(14, "Fourteen", false),
//       new optionObject(15, "Fifteen", false),
//       new optionObject(16, "Sixteen", false),
//       new optionObject(17, "Seventeen", false),
//       new optionObject(18, "Eighteen", false),
//       new optionObject(19, "Nineteen", false),
//       new optionObject(20, "Twenty", false)
//   ]

//   return <MultiSelect options={arrOptions} />;

// }

export default App;
