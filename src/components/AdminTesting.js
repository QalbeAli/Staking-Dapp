import React from "react";
import classes from "./AdminTesting.module.css";

const AdminTesting = (props) => {
  return (
    <div className={classes.for_testing}>
      <p>Only For Testing Purpose</p>
      <button onClick={props.claimTst}> Calim for 1000 Tst </button>
      <button onClick={props.redistributeRewards}>
        {props.page === "1"
          ? `Redistribute Rewards (Admin)`
          : `Custom Rewards (Admin)`}
      </button>
      <div className={classes.network}>
        <p>
          Selected Network: <b> {props.network.name} </b>
          <b> Id : {props.network.id} </b>
        </p>
        <p>Contract Balance : {props.contractBalance} TestToken Tst</p>
        <p>Contract Address : {props.tokenStakingContract._address}</p>
      </div>
    </div>
  );
};

export default AdminTesting;
