import React from "react";
import { API } from "../ApiList";

function Index() {
  const axios = require("axios").default;
  const [homeEventsAndUpdates, sethomeEventsAndUpdates] = React.useState("");
  axios
    .get(API.HOME_EVENTS_AND_UPDATES)
    .then(function (response) {
      sethomeEventsAndUpdates(response.data);
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  return { homeEventsAndUpdates };
}

export default Index;
