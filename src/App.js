import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {

  state = {
    person: [
      { id: '1', name: "Nikhil part 2", age: "27" },
      { id: '2', name: "Nikhil part 2", age: "28" },
      { id: '2', name: "Nikhil part 3", age: "29" },
    ],
    showPersons: false,
  }

  switchNameHandler = (userNmae) => {
    this.setState({
      person: [
        { name: userNmae, age: "27" },
        { name: "Nikhil part 2", age: "29" },
      ]
    });
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.person.findIndex(p => {
      return p.id === id;
    });

    let person = {
      ...this.state.person[personIndex]
    };
    person.name = event.target.value;

    const personNew = [...this.state.person];
    personNew[personIndex] = person;

    this.setState({ person: personNew });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.person];
    persons.splice(personIndex, 1);
    this.setState({ person: persons });
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    let classes = ['red', 'bold'].join(' ');

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.person.map((singlePerson, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={singlePerson.name}
              age={singlePerson.age}
              key={singlePerson.id}
              changed={(event) => this.nameChangeHandler(event, singlePerson.id)}
            />
          })}
          {/*<Person
            name={this.state.person[0].name}
            age={this.state.person[0].age}
            changed={this.nameChangeHandler}>
          </Person>
          <Person
            name={this.state.person[1].name}
            age={this.state.person[1].age}
            click={this.switchNameHandler.bind(this, "Nikhil!")}>Hobbies
          </Person>*/}
        </div>
      );
      style.backgroundColor = 'red';
    }

    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p className={classes}>This is really working.</p>
        <button
          style={style}
          onClick={this.togglePersonHandler}>Switch Name
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
