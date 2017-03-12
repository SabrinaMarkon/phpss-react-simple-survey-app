import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name:'',
      answers: {
        q1: '',
        q2: '',
        q3: '',
        q4: ''
      },
      submitted: false
    }
    
    this.handleQuestionChange = this.handleQuestionChange.bind(this);
  }
  
  handleNameSubmit(event) {
    var name = this.refs.name.value;
    this.setState({name:name}, function() {
      console.log(this.state);
    });
    event.preventDefault();
  }
  
  handleQuestionSubmit(event) {
      
  }
  
  handleQuestionChange(event) {
    
    var answers = this.state.answers;
    
    if(event.target.name ==='q1') {
      answers.q1 = event.target.value;
    } else if (event.target.name ==='q2') {
      answers.q2 = event.target.value;
    } else if (event.target.name ==='q3') {
      answers.q3 = event.target.value;
    } else if (event.target.name ==='q4') {
      answers.q4 = event.target.value;
    }
    
    this.setState({answers:answers}, function() {
      console.log(this.state);
    });
  }
  
  render() {
    var user;
    var questions;
    if(this.state.name && this.state.submitted === false) {
      user = <h2>Welcome {this.state.name}</h2>
      questions = <span>
        <h3>Survey Questions</h3>
        <form onSubmit={this.handleQuestionSubmit.bind(this)}>
          <div>
            <label>What is your favorite programming language?</label><br />
            <input type="radio" name="q1" value="PHP" onChange={this.handleQuestionChange} />PHP<br />
            <input type="radio" name="q1" value="JavaScript" onChange={this.handleQuestionChange} />JavaScript<br />
            <input type="radio" name="q1" value="Ruby" onChange={this.handleQuestionChange} />Ruby<br />
            <input type="radio" name="q1" value="C#" onChange={this.handleQuestionChange} />C#<br />
            <input type="radio" name="q1" value="Java" onChange={this.handleQuestionChange} />Java<br />
            <input type="radio" name="q1" value="Python" onChange={this.handleQuestionChange} />Python<br />
            <input type="radio" name="q1" value="Other" onChange={this.handleQuestionChange} />Other<br />
          </div>
          <div>
            <label>What is your favorite animal?</label><br />
            <input type="radio" name="q2" value="Cat" onChange={this.handleQuestionChange} />Cat<br />
            <input type="radio" name="q2" value="Dog" onChange={this.handleQuestionChange} />Dog<br />
            <input type="radio" name="q2" value="Bird" onChange={this.handleQuestionChange} />Bird<br />
            <input type="radio" name="q2" value="Snake" onChange={this.handleQuestionChange} />Snake<br />
            <input type="radio" name="q2" value="Bunny" onChange={this.handleQuestionChange} />Bunny<br />
            <input type="radio" name="q2" value="Gecko" onChange={this.handleQuestionChange} />Gecko<br />
            <input type="radio" name="q2" value="Other" onChange={this.handleQuestionChange} />Other<br />
          </div>
          <div>
            <label>What is your favorite sport?</label><br />
            <input type="radio" name="q3" value="Basketball" onChange={this.handleQuestionChange} />Basketball<br />
            <input type="radio" name="q3" value="Hockey" onChange={this.handleQuestionChange} />Hockey<br />
            <input type="radio" name="q3" value="Baseball" onChange={this.handleQuestionChange} />Baseball<br />
            <input type="radio" name="q3" value="Football" onChange={this.handleQuestionChange} />Football<br />
            <input type="radio" name="q3" value="Karate" onChange={this.handleQuestionChange} />Karate<br />
            <input type="radio" name="q3" value="Swimming" onChange={this.handleQuestionChange} />Swimming<br />
            <input type="radio" name="q3" value="Other" onChange={this.handleQuestionChange} />Other<br />
          </div>          <div>
            <label>What is your favorite Sci-Fi series?</label><br />
            <input type="radio" name="q4" value="Star Wars" onChange={this.handleQuestionChange} />Star Wars<br />
            <input type="radio" name="q4" value="Stargate" onChange={this.handleQuestionChange} />Stargate<br />
            <input type="radio" name="q4" value="Babylon 5" onChange={this.handleQuestionChange} />Babylon 5<br />
            <input type="radio" name="q4" value="Firefly" onChange={this.handleQuestionChange} />Firefly<br />
            <input type="radio" name="q4" value="Star Trek" onChange={this.handleQuestionChange} />Star Trek<br />
            <input type="radio" name="q4" value="Farscape" onChange={this.handleQuestionChange} />Farscape<br />
            <input type="radio" name="q4" value="Other" onChange={this.handleQuestionChange} />Other<br />
          </div>
        </form>
      </span>
    } else if(!this.state.name && this.state.submitted === false) {
        user = <span>
          <h2>Please enter your name to begin the survey</h2>
          <form onSubmit={this.handleNameSubmit.bind(this)}>
            <input type="text" placeholder="Enter Name..." ref="name" />
          </form>
        </span>
        questions = ''; 
    } else if (this.state.submitted === true) {
      
    }
    return (
      <div className="App">
        <div className="App-header text-center">
          <h2>Simple Survey</h2>
        </div>
        <div className="text-center">
          {user}
        </div>
        <div className="container">
          {questions}
        </div>
      </div>
    );
  }
}

export default App;
