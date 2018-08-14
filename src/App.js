import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        
          <img  className="image"src="../res/image.jpg"/>
         
          <h1 className="App-title">Welcome to React</h1>
        </header>
        
        <p className="para1">
        Not trying to answer the question - just a note that in create-react-app, relative paths for images don't seem to work. Instead, you can import an image.
        </p>
        <br/>
        <hr/>
        <p className="para2">
        Not trying to answer the question - just a note that in create-react-app, relative paths for images don't seem to work. Instead, you can import an image.
        </p>
      </div>
    );
  }
}

export default App;
