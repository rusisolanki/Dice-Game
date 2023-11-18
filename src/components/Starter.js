import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Starter.module.css'


const Starter = () => {
  
  return (
    <section className={classes.main}>
      <div>
        <img src="../../images/dices.png" alt="" /> 
      </div> 
      <div className={classes.start}>
        <h1 className={classes.header}>DICE GAME</h1>
        <Link to='/game'><button className={classes.primaryBtn}>Start Now</button></Link>
      </div>
    </section>
  )
}

export default Starter
