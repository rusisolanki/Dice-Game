import React from 'react'
import classes from './Total.module.css'

const Total = (props) => {
  return (
    <div className={classes.score}>
      <h1>{props.score}</h1>
      <p>Total Score</p>
    </div>
  )
}

export default Total
