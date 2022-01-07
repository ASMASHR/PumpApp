import {combineReducers} from "redux"
import authReducer from "./authReducer"
import stationReducer from "./stationReducer"
import userReducer from "./userReducer"


export default  combineReducers({
    authReducer ,userReducer,stationReducer
})