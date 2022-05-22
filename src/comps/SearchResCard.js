import React from "react";
import { ImLocation } from "react-icons/im";
import img from "../images/unsplash_Z2YggU_u8mg.png";
export default function SearchResCard({
  head,
  location,
  range,
  avgIncome,
  assurance,
  distance,
}) {
  return (
    <div className="searchResDiv">
      <div style={{ marginTop: "20px", fontSize: "20px", fontWeight: "bold" }}>
        {head}
      </div>
      <div style={{ marginTop: "7px", color: "grey" }}>
        Location - {location}
      </div>
      <div
        style={{
          width: "70%",
          backgroundColor: "lightGrey",
          height: "1px",
          marginBlock: "12px",
        }}
      ></div>
      <img
        src={img}
        width="217px"
        height="104.81px"
        style={{ marginTop: "10px" }}
      ></img>
      <div
        style={{
          fontSize: "14px",
          color: "grey",
          marginTop: "21px",
          width: "80%",
        }}
      >
        Average Annual Income - Rs {avgIncome}
      </div>
      <div
        style={{
          fontSize: "14px",
          color: "grey",
          marginBlock: "10px",
          width: "80%",
        }}
      >
        Range - {range}
      </div>

      <div
        style={{
          fontSize: "14px",
          color: "grey",
          // marginTop: "px",
          marginBottom:"22px",
          width: "80%",
        }}
      >
        Assurance Rate - {assurance}%
      </div>
      <button className="readMore"> Read More</button>

      <div style={{ fontSize: "14px", color: "grey", marginTop: "15px" }}>
        <ImLocation color="red" style={{ marginInline: "10px" }}></ImLocation>
        {"2.5 kms from your location"}
      </div>
    </div>
  );
}
