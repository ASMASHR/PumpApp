import React, { Fragment } from "react";
import './AppNavbar.css'
import { Navbar, NavbarBrand, Nav, NavItem, Button } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import Register from '../auth/Register'

import Login from "../auth/Login";
import { Link } from "react-router-dom";
import { logout} from "../../js/action/authAction";

const AppNavbar = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const user = useSelector(state => state.authReducer.user) 
 console.log(user)
  return (
    <Navbar className="d-flex justify-content-between" color="dark" dark>
      <NavbarBrand 
        tag={() => (
          <Link className="nBrand"
            to="/"
          >
            Pump App
          </Link>
        )}
      />
      <Nav>
        {
          isAuth==false&&user==null?
      (
      <Fragment className="">
            <NavItem className="navItems">
              <Login />
              <Register/>
            </NavItem>
      </Fragment>):
          isAuth==true&&user!==null&&user.role==1?
            
            (<Fragment>
              <NavItem className="p-2">
                <Link className="itemButton" to="/dashboard">Dashboard</Link>
            </NavItem>
            <NavItem className="p-2">
                <Link className="itemButton"  to="/station"> Stations</Link>
            </NavItem>
            <NavItem className="p-2">
                <Link className="itemButton" to="/user">Users</Link>
            </NavItem>
            <NavItem className="p-2">
                <Link className="itemButton" to="/" onClick={() => dispatch(logout())}>Logout</Link>
            </NavItem>
          </Fragment>)
        :
        (<Fragment className="row2">
            <NavItem className="p-2">
                <Link className="itemButton" to="/dashboard">Dashboard</Link>
            </NavItem>
            <NavItem className="p-2">
                <Link className="itemButton" to="/station">
                      Stations
                </Link>
            </NavItem>
            <NavItem className="p-2">
                <Link className="itemButton" to="/" onClick={() => dispatch(logout())}>Logout</Link>
            </NavItem>
          </Fragment>
          )
}
      </Nav> 
    </Navbar>
  );
};

export default AppNavbar;
