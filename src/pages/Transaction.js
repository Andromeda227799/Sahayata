import React from "react";
import TransactionSubScreen from "../comps/TransactionSubScreen";
import TransactionComplete from "../comps/TransactionComplete";
import { Link } from "react-router-dom";
import Navbar from "../comps/Navbar";
function Transaction() {
  const [transactionState, settransactionState] = React.useState(false);
  // return "hello"
  return (
    <>
      <Navbar/>
      {transactionState ? <TransactionComplete /> : <TransactionSubScreen />}
    </>
  );
}

export default Transaction;
