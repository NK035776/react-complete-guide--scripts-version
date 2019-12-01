import React, { useEffect } from 'react';
import classes from './Cockpit.module.css'

const Cockpit = (props) => {

    useEffect(() => {
        console.log('[Cockpit.js] use effect');

        setTimeout(() => {
            alert('Saved Data to cloud');
        }, 1000);

        return () => {
            console.log('[Cockpit.js] clean up work');
        }
    }, []);

    useEffect (() => {
        console.log('[Cockpit.js] use effect 2');
        return () => {
            console.log('[Cockpit.js] clean up work 2');
        }
    })

    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    let assignedClasses = [];

    if (props.personsLength <= 2) {
        assignedClasses.push(classes.red);
    }
  
    if (props.personsLength <= 1) {
        assignedClasses.push(classes.bold);
    }
  
    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working.</p>
            <button 
                className={btnClass} 
                onClick={props.onClick}>
                Switch Name
            </button>
        </div>
    );
};

export default React.memo(Cockpit);