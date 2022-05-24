import React from "react";
import { GLOBALS } from "../../config";
import { API } from "../ApiList";

function Transaction(type, values) {
    const [result, setResult] = React.useState();
  const axios = require("axios").default;
  console.log("TRANSACTION API VALUES", values);
  axios
    .post(
      type === "withdraw" ? API.TRANSACTIOn_WITHDRAW : API.TRANSACTIOn_DEPOSIT,
      {
        phone:GLOBALS.phone,
        amount: values.amount,
        description: values.description,
        date: values.date,
      }
    )
    .then(function (response) {
      console.log(response);
      response.data?setResult(response.data):setResult("failed");
    })
    .catch(function (error) {
      console.log(error);
    });

  return {result};
}

export default Transaction;
