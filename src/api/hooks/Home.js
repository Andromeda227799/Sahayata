import React from "react";
import { API } from "../ApiList";
import img from "../../pages/assets/unsplash_Z2YggU_u8mg.png"
function FetchEventUpdates() {
  const axios = require("axios").default;
  const [homeEventsAndUpdates, sethomeEventsAndUpdates] = React.useState([
    {
      id:1,
      img:img,
      info:"New self help groups were created in the district of Thar in Rajasthan.",
      link:"/",
    },
    {
      id:2,
      img:img,
      info:"New self help groups were created in the district of Thar in Rajasthan.",
      link:"/",
    },
    {
      id:3,
      img:img,
      info:"New self help groups were created in the district of Thar in Rajasthan.",
      link:"/",
    }
  ]);
  const [homeStoryOfTheDay, sethomeStoryOfTheDay] = React.useState([
    {
      id:1,
      info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam elit, vel quis amet morbi blandit gravida etiam. Velit et dignissim bibendum turpis volutpat sem nisi senectus ipsum. Donec aliquam.",
      link:"/",
    },
    {
      id:2,
      info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam elit, vel quis amet morbi blandit gravida etiam. Velit et dignissim bibendum turpis volutpat sem nisi senectus ipsum. Donec aliquam.",
      link:"/",
    },
    {
      id:3,
      info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam elit, vel quis amet morbi blandit gravida etiam. Velit et dignissim bibendum turpis volutpat sem nisi senectus ipsum. Donec aliquam.",
      link:"/",
    }
  ]);
  // axios
  //   .get(API.HOME_EVENTS_AND_UPDATES)
  //   .then(function (response) {
  //     sethomeEventsAndUpdates(response.data);
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     // handle error
  //     console.log(error);
  //   });
  //   axios
  //   .get(API.HOME_STORY_OF_THE_DAY)
  //   .then(function (response) {
  //     sethomeStoryOfTheDay(response.data);
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     // handle error
  //     console.log(error);
  //   });
    
  
  return { homeEventsAndUpdates,homeStoryOfTheDay};
}

export default FetchEventUpdates;
