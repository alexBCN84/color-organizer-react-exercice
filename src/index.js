import React from 'react'
import { render } from 'react-dom'
import AddColorForm from './components/AddColorForm'
//import data from './data/myData'

window.React = React

render(
    <AddColorForm/>,
    document.getElementById("react-container")
)