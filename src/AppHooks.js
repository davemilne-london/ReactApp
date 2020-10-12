// src/components/AppHooks.js
import React, { Component } from 'react';
import User from './components/User';
import Navbar from './components/Navbar';



const App = () => {

    const [userA, updateUserA] = useState(
        {
            firstName: "Harper",
            avatarUrl: "https://www.refreshmiami.com/wp-content/uploads/2018/07/55085_logo-ironhack.png"
        }
    );
    const [userB, updateUserB] = useState(
        {
            firstName: "Ana",
            avatarUrl: "https://s3.amazonaws.com/owler-image/logo/ironhack_owler_20180828_221413_original.png"
        }
    );
    const [clickCount, useClickCount] = useState(0);
    const [backColor, useBackColor] = useState('yellow');
    const [bootcamp, useBootcamp] = useState('Ironhack');


  colorMapper = () => {
    const hexColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return hexColor;
  };

  clickHandler = () => {
    this.setState( { clickCount : clickCount + 1 } );
    
    /* YOUR CODE HERE */
  };

 
    return (     
      <div className="App">

        <Navbar />
        
        <h1>React = state and props</h1>
        <p>Count is: {this.state.clickCount}</p>
        <button onClick={this.clickHandler}> Click me </button>

        <User
          theColor={backColor}
          firstName={userA.firstName}
          image={userA.avatarUrl}
          bootcamp={bootcamp}
           />
        <User 
          firstName={userB.firstName}
          image={userB.avatarUrl}
          bootcamp={bootcamp}
           />
      </div>
    );

}

export default App;
