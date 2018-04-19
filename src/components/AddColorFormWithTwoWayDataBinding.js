import {Component} from 'react'
import React from 'react'
import PropTypes from 'prop-types'

class AddColorForm extends Component {
    constructor(props) {
        super(props)
        this.submit = this.submit.bind(this)
    }
    submit(e) {
        const {_title, _color} = this.refs
        this.props.onNewColor(_title.value, _color.value)
        e.preventDefault();
        //alert(`New Color: ${_title.value} ${_color.value}`)
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

// defining function property in the component's propTypes and defaultProps
AddColorForm.propTypes = {
    onNewColor: PropTypes.func
}

AddColorForm.defaultProps = {
    onNewColor: f => f
}
export default AddColorForm
// with ES6 classes we need to bind the scope of the component to any methods that need to access that scope with this keyword.
// A ref is an identifier that React uses to reference DOM elements.