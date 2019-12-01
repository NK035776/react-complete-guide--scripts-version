import React, { Component } from 'react';
import classes from './Person.module.css';


class Person extends Component {

    constructor(props) {
        super(props);
        console.log('[App.js] constructor');
      }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Person.js] shouldComponentUpdate')
        return true;
    }

    componentDidMount() {
        console.log('[Person.js] componentDidMount');
    }
    

    render() {
        console.log('[Person.js] rendering...')
        return (
            <div className = {classes.Person}>
                <p onClick={this.props.click}>I am a {this.props.name} and {this.props.age}</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}></input>
            </div>
        )
    }
}

export default Person;