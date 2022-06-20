import React, { useState } from "react";
import classes from "./Staking.module.css";
import stakeIcon from "../assets/stake.png";
import unstakeIcon from "../assets/unstake.png";
import icon from "../assets/icon.png";

const Staking = (props) => {
  const [inputValue, setInputValue] = useState("");

  const inputHandler = (event) => {
    event.preventDefault();
    setInputValue(event.target.value);
    props.inputHandler(event.target.value);
  };

  const goMax = () => {
    setInputValue(props.userBalance);
    props.inputHandler(props.userBalance);
  };

  return (
    <div className="classes.staking">
      <img src={icon} alt="icon" className={classes.icon} />
      <h1>Staking DApp</h1>
      <p>{props.account}</p>
      <h3>
        {props.apy}% (APY) - {props.apy / 365} % Daily Earning
      </h3>
      <div className={classes.inputDiv}>
        <input
          className={classes.input}
          type="Number"
          min="0"
          step="1"
          onChange={inputHandler}
          value={inputValue}
        />
      </div>
      <button
        className={classes.stakeButton}
        onClick={() => {
          props.stakeHandler();
          setInputValue("");
        }}
      >
        <img src={stakeIcon} alt="stakeIcon" className={classes.stakeIcon} />
        <p>Stake</p>
      </button>
      &nbsp; &nbsp;
      <button className={classes.unstakeButton} onClick={props.unStakeHandler}>
        <img
          src={unstakeIcon}
          alt="unstake icon"
          className={classes.stakeIcon}
        />
        <p>Unstake All</p>
      </button>
      <div className={classes.totals}>
        <h4>
          Total Staked (by all users): {props.totalStaked} TestToken (Tst)
        </h4>
        <div>&nbsp;</div>
        <h5>My Stake {props.myStake} TestToken (Tst)</h5>
        <h5>
          My Estimated Revenue{" "}
          {((props.myStake * props.apy) / 36500).toFixed(3)} TestToken Tst
        </h5>
        <h5 onClick={goMax} className={classes.goMax}>
          My Balance : {props.userBalance} TestToken Tst
        </h5>
      </div>
    </div>
  );
};

export default Staking;
