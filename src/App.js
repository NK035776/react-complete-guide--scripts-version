import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {

  state = {
    person: [
      { name: "Nikhil", age: "27" },
      { name: "Nikhil part 2", age: "28" },
    ]
  }

  switchNameHandler = (userNmae) => {
    this.setState({
      person: [
        { name: userNmae, age: "27" },
        { name: "Nikhil part 2", age: "29" },
      ]
    });
  }

  nameChangeHandler = (event) => {
    this.setState({
      person: [
        { name: event.target.value, age: "27" },
        { name: "Nikhil part 2", age: "29" },
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>This is really working.</p>
        <button onClick={() => this.switchNameHandler("UserName")}>Switch Name</button>
        <Person
          name={this.state.person[0].name}
          age={this.state.person[0].age}
          changed={this.nameChangeHandler}>
        </Person>
        <Person
          name={this.state.person[1].name}
          age={this.state.person[1].age}
          click={this.switchNameHandler}>Hobbies
        </Person>
      </div>
    );
  }
}

export default App;
