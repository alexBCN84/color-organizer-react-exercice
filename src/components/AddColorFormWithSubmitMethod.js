import {Component} from 'react'
import React from 'react'
class AddColorForm extends Component {
    constructor(props) {
        super(props)
        this.submit = this.submit.bind(this)
    }
    submit(e) {
        const {_color, _title} = this.refs
        e.preventDefault();
        alert(`New Color: ${_title.value} ${_color.value}`)
        _title.value = '';
        _color.value = '#000000';
        _title.focus();
    }
    render() {
        return (
            <form onSubmit={this.submit}>
                <input ref="_title" type="text" placeholder="color title..." required/>
                <input ref="_color" type="text" required />
                <button>ADD</button>
            </form>
        )
    }
}

export default AddColorForm
// with ES6 classes we need to bind the scope of the component to any methods that need to access that scope with this keyword.
// A ref is an identifier that React uses to reference DOM elements.