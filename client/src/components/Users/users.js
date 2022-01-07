import React, { useEffect } from "react";
import Carduser from "./Carduser.js";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import {  get_user } from "../../js/action/authAction";

const User = () => {
  const history = useHistory()
   const state = useSelector(state =>{
        console.log("state*****", state);
     return  state;
    });
     sessionStorage.setItem("baseLocation", history.location.pathname);
     const dispatch = useDispatch()
    const getUser = () => dispatch(get_user())
  useEffect(() => {
    getUser()
    console.log(state)
  },[]);
  console.log("state.user.", state.userReducer);
   const users = state.userReducer.user.users
  console.log("user111111s" , users)
  if(state.userReducer.isLoad)
    {
        return <h1> waiting ... </h1>
    }
  return (
    <div>
      {users.map((s) => <Carduser s={s}/>) }
      
      {/* <div>{users}</div> */}
    </div>
  );
};
export default User;
