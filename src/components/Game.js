import React, { useState } from "react";
import Total from "./Total";
import Tile from "./Tile";
import classes from './Game.module.css'
import Dice from "./Dice";

const Game = () => {

  const [selectedNumber, setSelectedNumber] = useState()
  const [selectedDice, setSelectedDice] = useState(1)
  const [score, setScore] = useState(0)
  const [error, setError] = useState(false)

  const randomDice = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
  }

  const selectDice = () => {
    if(!selectedNumber){
      setError(true)
      return;
    }
     
    const diceNumber = randomDice(1,7)
    console.log(diceNumber)
    setSelectedDice(diceNumber)

    console.log(selectedDice)

    if(selectedNumber === diceNumber){
      setScore(prev => prev + selectedNumber)
    }
    else{
      setScore(prev => prev - 2)
    }

    setSelectedNumber(undefined)

  }
  
  const resetScore = () => {
    setSelectedDice(1)
    setScore(0)
  }


  return (
    <div>
      <div className={classes.head}>
        <Total score={score}/>
        <Tile selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} setError={setError} error={error}/>
      </div>
      <div>
        <Dice selectDice={selectDice} selectedDice={selectedDice} selectedNumber={selectedNumber} resetScore={resetScore}/>
      </div>
    </div>
  );
};

export default Game;
