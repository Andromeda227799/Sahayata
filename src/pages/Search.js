import React from "react";
import SearchInfo from "../comps/SearchInfo";
import SearchResCard from "../comps/SearchResCard";
const axios = require('axios');
const temp=[];
export default function Search() {
  const [search, setSearch] = React.useState("");
  const [apiRes, setapiRes] = React.useState([]);
  const handleSearch=(s)=>{
    console.log("LOGS ",s );
    axios.post('http://127.0.0.1:5000/searchShg',{
      "location":s
    })
    .then(function (response) {
      console.log(response.data.message)
      response.data.message.forEach((element,id) => {
        temp.push(element);
        
      });
      setapiRes(temp);
      console.log("FINAL API RES ",apiRes);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  
  const [selected, setselected] = React.useState(0);
  const handleClick=(e)=>{
      setselected(e);
  }
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <header className="Header_header__omCkM">
        <div className="topnav">
          <a id="nav" className="active" href="">
            Self-help groups
          </a>
          <a id="nav1" href="">
            About Us
          </a>
          <a id="nav2" href="">
            Events
          </a>
          <a id="nav3" href="">
            Contact Us
          </a>
          <a href="" className="butt" id="butt">
            Join now
          </a>
          <img src="./assets/loup.svg" alt="logo" id="nav5" />
        </div>
      </header>
      <a style={{ marginTop: "70px", fontSize: "36px", fontFamily: "poppins" }}>
        Self-Help Groups
      </a>
      <div
        style={{
          width: "1000px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginTop: "50px",
        }}
      >
        <input
          style={{
            height: "50px",
            marginTop: "15px",
            fontFamily: "poppins",
            fontSize: "large",
          }}
          type="text"
          id="fname"
          onChange={(e)=>setSearch(e.target.value)}
          placeholder="Search for group by location, name , occupation..... "
        />
        <button className="search" onClick={()=>handleSearch(search)}>Search</button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          marginRight:"280px",
          marginBottom:"30px"
        }}
      >
        <div style={{ fontWeight: "bold", fontFamily: "poppins" }}>
          Also filter by :{" "}
        </div>
        <button
          className="filterButton"
          onClick={()=>handleClick(1)}
          style={{
            backgroundColor: selected == 1 ? "#06b58c" : "#EAEBF1",
            color: selected == 1 ? "white" : "black",
          }}
        >
          Occupation
        </button>
        <button
          className="filterButton"
          onClick={()=>handleClick(2)}
          style={{
            backgroundColor: selected == 2 ? "#06b58c" : "#EAEBF1",
            color: selected == 2 ? "white" : "black",
          }}
        >
          Location
        </button>
        <button
          className="filterButton"
          onClick={()=>handleClick(3)}
          style={{
            backgroundColor: selected == 3 ? "#06b58c" : "#EAEBF1",
            color: selected == 3 ? "white" : "black",
          }}
        >
          Money Available
        </button>
        <button
          className="filterButton"
          onClick={()=>handleClick(4)}
          style={{
            backgroundColor: selected == 4 ? "#06b58c" : "#EAEBF1",
            color: selected == 4 ? "white" : "black",
          }}
        >
          Income
        </button>
        <button className="clearFilter">Clear Filter</button>
      </div>
      <div class="grid-container">
        {apiRes.length>1?apiRes.map((val, id) => {
          console.log(val.description);
          return (
            <SearchResCard
              key={id}
              head={val.name}
              location={val.location}
              avgIncome={val.average_annual_income}
              range={val.range}
              assurance={val.assurance_rate}
              // distance={val.distance}
            />
          );
        }):""}
      </div>
      <div>
        <SearchInfo
          head={"About SHG"}
          body="A self-help group is a financial intermediary committee usually composed of 10 to 25 local women between the ages of 18 and 40. Most self-help groups are in India, especially in South Asia and Southeast Asia. These are informal associations of people especially women who come together to find ways to improve their living conditions. A SHG collaborate to collect capital and offer collateral-free and very low interest loans to the people and a source of microfinance services to the poor.
 A SHG acts as a go-through for formal banking services to reach in rural areas.
"
        ></SearchInfo>
        <SearchInfo
          head={"How to  join an SHG ?"}
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis ultrices vulputate enim proin erat vitae dui proin. Mauris ut nunc vitae accumsan. Tempor sit morbi sagittis, facilisis mi arcu accumsan quis ante. Nec, sed sed neque mattis vel. Vitae, rhoncus, adipiscing viverra etiam. Convallis ornare imperdiet sit amet sit netus. Lacus, at pharetra morbi scelerisque. Enim ut purus, nisi, dictum tempus fusce. Facilisis sed ipsum, orci non quis augue.
"
        ></SearchInfo>
        <SearchInfo
          head={"How to  create an SHG ?"}
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis ultrices vulputate enim proin erat vitae dui proin. Mauris ut nunc vitae accumsan. Tempor sit morbi sagittis, facilisis mi arcu accumsan quis ante. Nec, sed sed neque mattis vel. Vitae, rhoncus, adipiscing viverra etiam. Convallis ornare imperdiet sit amet sit netus. Lacus, at pharetra morbi scelerisque. Enim ut purus, nisi, dictum tempus fusce. Facilisis sed ipsum, orci non quis augue."
        ></SearchInfo>
      </div>
    </div>
  );
}
