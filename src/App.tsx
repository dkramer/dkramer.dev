import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./chrome/Header";
import {Footer} from "./chrome/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <img src={logo} className="App-logo" alt="logo" />
        <Footer />
    </div>
  );
}

export default App;
