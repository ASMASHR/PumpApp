import { useDispatch } from "react-redux";
import { delete_station } from "../../../js/action/authAction";
import { edit_station } from "../../../js/action/authAction";
import React, { useState } from "react";
import EditStation from "../EditStation/EditStation";
import './StationCard.css'
const Cardstation = ({ s }) => {
  const dispatch = useDispatch();
  const deletestation = () => {
    dispatch(delete_station(s._id));
  };
  const editstation = () => {
    dispatch(edit_station(s._id));
  };
  return (
    <div className="StationcardContainer">
    <div className="infoContainer"
      
    >
      <img className="imgstation" src={s.imgstation}/>
      <div className="stationInfo">
        <h1> name : {s.name}</h1>
        <p> code :{s.code}</p>
        <p> nombre de pompes: {s.pumpnumber}</p>
        <p> type de pompes :{s.pumptype}</p>
        <p> dernier intervention :{s.intervention}</p>
      </div>

      
    </div>
    <div className="stationButton" style={{ display: "flex"}}>

        <button
          onClick={deletestation}
          style={{
            color: "white",
            borderRadius: "3px",
            backgroundColor: "blue",
            padding: "6px 14px",
          }}
        >
          {" "}
          delete{" "}
        </button>
        <EditStation s={s} />
        
        
      </div>
    </div>
  );
};

export default Cardstation;
