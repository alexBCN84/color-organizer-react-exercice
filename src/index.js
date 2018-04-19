import React from 'react'
import { render } from 'react-dom'


//import AddColorForm from './components/AddColorForm'
//import AddColorForm from './components/AddColorFormWithSubmitMethod'
//import data from './data/myData'
//import AddColorForm from './components/AddColorFormWithTwoWayDataBinding'
import AddColorForm from './components/AddColorFormStateless'

window.React = React

// pass in the logColor functiona as props of AddColorForm Component

render(
    <AddColorForm onNewColor={(title, color) => console.log(`New Color: ${title} | ${color}`)}/>,
    document.getElementById("react-container")
)