import React from 'react'
import classes from './Rules.module.css'

const Rules = () => {
  return (
    <div className={classes.rules}>
        <h2>How to Play Dice Game</h2>
        <ul>
            <li>Select any number</li>
            <li>Click on dice image</li>
            <li>After you click on dice if your selected number is the same as of the dice you get those points</li>
            <li>If you get wrong guess two points will be deducted</li>
        </ul>
    </div>
  )
}

export default Rules
