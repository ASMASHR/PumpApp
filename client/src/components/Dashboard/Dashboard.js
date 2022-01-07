import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getAuthUser, get_station, get_user } from "../../js/action/authAction";
import Register from "../auth/Register";
import EditUser from "../Users/EditUser";

const Dashboard = () => {
  const history = useHistory();
  sessionStorage.setItem("baseLocation", history.location.pathname);
  const user = useSelector((state) => state.authReducer.user);
  const dispatch = useDispatch();
  const getUser = () => dispatch(getAuthUser());
  useEffect(() => {
    console.log("getUser");
    getUser();
  }, []);
  if (!user) {
    return <h1> waiting ... </h1>;
  }
  return (
    <div
      style={{
        boxShadow: " 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
        width: "60%",
        margin: "30px auto ",
        padding: "30px",
      }}
    >
      role : {user.role === 0 ? "USER" : "ADMIN"} <br />
      name : {user.name} <br />
      email : {user.email}
      <EditUser user={user}/>
      {/* <div style={{ display: "flex", gap: "20px" }}>
        {user.role === 1 ? (
          <span style={{ display: "flex", gap: "20px" }}>
            <Link style={{ color: "black", fontSize: "12px" }} to="/user">
              <button
                style={{
                  padding: "8px 24px",
                  backgroundColor: "blue",
                  border: "none",
                  color: "white",
                  borderRadius: "3px",
                }}
              >
               
                Users
              </button>
            </Link>
            <Register />
          </span>
        ) : (
          ""
        )}
        {
          <Link style={{ color: "black", fontSize: "12px" }} to="/station">
            <button
              style={{
                padding: "8px 24px",
                backgroundColor: "blue",
                border: "none",
                color: "white",
                borderRadius: "3px",
              }}

            >
              {" "}
              Station
            </button>
          </Link>
        }
      </div> */}
    </div>
  );
};

export default Dashboard;
