import React, { useState } from "react";
import classes from "./Tile.module.css";

const Tile = (props) => {
  const boxArray = [1,2,3,4,5,6]
  
  const numberSelector = (number) => {
    props.setSelectedNumber(number)
    props.setError(false)

  }
  

  return (
    <div className={classes.numberTiles}>
      <div className={classes.tiles}>
        {boxArray.map((number) => (
          <div className={classes.singleTile} onClick={() => numberSelector(number)}>{number}</div>
        ))}
      </div>
      {props.error ? <p style={{color: 'red', fontSize: '1.1em'}}>Number is not selected</p> : ''}
      <p>Select Number</p>
    </div>
  );
};

export default Tile;
