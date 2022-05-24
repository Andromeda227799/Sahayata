import React from "react";
import TransactionSubScreen from "../comps/TransactionSubScreen";
import TransactionComplete from "../comps/TransactionComplete";
import { Link } from "react-router-dom";
import Navbar from "../comps/Navbar";
function Transaction() {
  const [transactionStatus, setTransactionStatus] = React.useState();
  const shgInfo={
    name:"Samaj Sevika Dal",
    location:"Ujjain District",
    avgIncome:"Rs 40,000",
    capital:"Rs 20,000",
    loanRange:"Medium",
    riskRate:"3%",
    ir:"1%"
  }
  // return "hello"
  return (
    <>
      <Navbar/>
      <TransactionComplete shgInfo={shgInfo} balance={"20000"}/>
      {/* {transactionStatus== ? <TransactionComplete /> : <TransactionSubScreen setTransactionStatus={setTransactionStatus} shgInfo={shgInfo}/>} */}
    </>
  );
}

export default Transaction;
