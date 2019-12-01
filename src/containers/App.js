import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit' 

class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    person: [
      { id: '1', name: "Nikhil part 2", age: "27" },
      { id: '2', name: "Nikhil part 2", age: "28" },
      { id: '3', name: "Nikhil part 3", age: "29" },
    ],
    showPersons: false,
    showCockpit: true,
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate')
    return true;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
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
    console.log('[App.js] render');
    let persons = null;
    
    if (this.state.showPersons) {
      persons = (
          <Persons 
            persons={this.state.person}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler} />
      );
    }

    return (
      <div className={classes.App}>
        <button onClick={() => {
          this.setState({showCockpit: false})
        }}>
          Toggle Cockpit
        </button>
        { this.state.showCockpit ? (<Cockpit 
          title={this.props.appTitle}
          showPersons={this.state.showPersons} 
          personsLength={this.state.person.length} 
          onClick={this.togglePersonHandler}/> )
          : null }
        {persons}
      </div>
    );
  }
}

export default App;
