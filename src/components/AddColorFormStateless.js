// let's refactor AddColorForm as a stateless functional component

import React from 'react'

const AddColorForm = ({onNewColor=f=>f}) => {
    let _title, _color
    const submit = e => {
        e.preventDefault()
        onNewColor(_title.value, _color.value)
        _title.value = ''
        _color.value = '#000000'
        _title.focus()
    }

    return (
        <form onSubmit={submit}>
            <input ref={input => _title = input} type="text" placeholder="color title..." required/>
            <input ref={input => _color = input} type="color" required/>
            <button>ADD</button>
        </form>
    )
}

export default AddColorForm

/*
In this stateless functional component, refs are set with a callback function instead of a string. 
The callback function passes the element's instance as an argument. This instance can be captured and saved into a local
variable like _title or _color. Once we've saved the refs to local variables, they are easily accessed when the form is submitted.
*/