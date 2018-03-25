import {Component} from 'react'
import React from 'react'

// here is a basic React component created with ES6 class 
// this component is a form with no user interactivity yet whatsoever.

class AddColorForm extends Component {
    render() {
        return (
        <form onSubmit={e => e.prenventDefault()}>
            <input type="text" placeholder="color title..." required/>
            <input type="color"/>
            <button>ADD COLOR</button>
        </form>
        )
    }
}

export default AddColorForm

// preventDefault() prevents the form from trying to send a GET request once submitted