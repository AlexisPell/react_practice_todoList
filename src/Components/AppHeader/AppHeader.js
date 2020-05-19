import React from 'react'
import classes from './AppHeader.module.sass'

const AppHeader = props => {
  return (
    <div className={classes.AppHeader}>
      <h1>My ToDo list</h1>
      <h4>{props.toDo} more to do, {props.done} done</h4>
    </div>
  )
}

export default AppHeader