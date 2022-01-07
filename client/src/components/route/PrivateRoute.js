import React from 'react'

import {Route , Redirect, useHistory } from "react-router-dom"
import { useSelector} from "react-redux"
import Dashboard from '../Dashboard/Dashboard'
import Station from '../Stations/station'
import User from '../Users/users'
const PrivateRoute = ({component : Component, ...rest}) => {
    let history = useHistory();
    const isAuth = useSelector(state =>{
        console.log("state*****", state);
     return  state.authReducer.isAuth
    })
    
    if(!isAuth)
    {
       //  history.push(history.localtion);
        return <Redirect to ="/" />
    }
    return (
        <div>
        <Route  path="/dashboard" component={Dashboard} />
         <Route exact path="/station" component={Station} />
        <Route exact path="/user" component={User} />
        </div>
    )
}

export default PrivateRoute
