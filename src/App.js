import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/37072390_2061852473860133_1419288190824480768_n.jpg?_nc_cat=0&oh=d1bcaba43c01f118d011a199e2f2d8df&oe=5C37CDA3" className="App-logo" alt="logo" />
          <h1 className="App-title">About Josh</h1>
        </header>
        
        <section>
          <h2>A few random facts about me:</h2>
          <div>My name is Josh and I currently work at SoFi</div>
          <div>I've worked in call centers nearly my entire adult life</div>
          <div>I'm married with a dog and two cats</div>

        </section>
        <section>
        <h2>I am attending HELIO because:</h2>
        
        <li>I'm super burnt out on customer service</li>
        <li>I'm done with jobs and looking for a career</li>
        <li>I'm ready to change my life!</li>
        </section>
        

        <section>
        <h2>A few of my interests include:</h2>
        
        <li>Poi</li>
        <li>Creating and performing music</li>
        <li>Really fast things</li>
       

        </section>


        <section>



        </section>
      </div>
     
     
    );
  }
}

export default App;
