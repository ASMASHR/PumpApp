import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect, useHistory } from "react-router-dom";
import { get_station } from "../../js/action/authAction";
import Cardstation from "./StationCard/Cardstation.js";
import AddStation  from './AddStation/AddStation'
import './stations.css'
const Station = () => {
  const history = useHistory();
  
  sessionStorage.setItem("baseLocation", history.location.pathname);
  const state = useSelector((state) => {
    console.log("state*****", state);
    return state;
  });
  const dispatch = useDispatch();
  const getStation = () => dispatch(get_station());
  useEffect(() => {
    getStation();
    console.log(state);
  }, []);
  console.log("state.stationReducer.station.", state.stationReducer);
  const stations = state.stationReducer.station.stations;
  const user=useSelector(state => state.authReducer.user) 
  if (state.stationReducer.isLoad) {
    return <h1> waiting ... </h1>;
  }
  return (
    <div className="stations">
{/* only admin should add station */}
      {user.role==1?<AddStation />:<div></div>}
<div className="stationsContainer">
      {stations.map((s) => (
  // <div
  //         style={{ display:"flex",flexWrap:"wrap",
  //           gap: "20px",
  //           margin: "5px",
  //         }}
  //       >
  //         {" "}
          <Cardstation s={s} />
// </div>
      ))}
</div>
      {/* <div>{users}</div> */}
    </div>
  );
};
export default Station;
