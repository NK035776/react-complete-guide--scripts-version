import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {

    constructor(props) {
        super(props);
        console.log('[Persons.js] constructor');
      }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.persons !== this.props.persons) {
            return true;
        }
        else {
            return false;
        }
    }

    componentDidMount() {
        console.log('[Persons.js] componentDidMount');
    }
    
    render() {
        console.log('[Persons.js] rendering...');
        return this.props.persons.map((singlePerson, index) => {
            return <Person
                click={() => this.props.clicked(index)}
                name={singlePerson.name}
                age={singlePerson.age}
                key={singlePerson.id}
                changed={(event) => 
                    this.props.changed(event, singlePerson.id)}/> 
            }
        )
    }
}


export default Persons;