import React, {useState} from 'react'
import classes from './Dice.module.css'
import Rules from './Rules'
const Dice = (props) => {
  const [showRules, setShowRules] = useState(true)
 
  const setRules = () => {
    setShowRules((prevShowRules) => {
      return !prevShowRules
    })
  }
  return (
    <div className={classes.main}>
      {props.selectedNumber ? <p style={{fontWeight: '600', fontSize: '1.2em', color: 'green'}}>The number selected : {props.selectedNumber}</p> : ''}
      <div className={classes.dice} onClick={props.selectDice}>
          <img src={`../../images/dice_${props.selectedDice}.png`} alt="Dice" width={170} height={170}/>
          <p>Click on dice to roll</p>
      </div>
      <div className={classes.button}>
          <button className={classes.primaryBtn} onClick={props.resetScore}>Reset Score</button>
          <button className={classes.secondaryBtn} onClick={setRules}>{showRules ? 'Hide' : 'Show'} Rules</button>
      </div>
      <div>
        {showRules && <Rules/>}
      </div>
    </div>
  )
}

export default Dice
