import axios from "axios" ; 


import {LOGIN_USER ,
    LOGOUT,
    GET_AUTH_USER,
    REGISTER_USER ,
    GET_AUTH_ADMIN,
    AUTH_ERROR,
    SET_LOADING,
    GET_USER,
    GET_STATION,

    } from "../action/actionTypes"

 // register user
    export const register = (formData) =>async (dispatch) =>{
              dispatch(setLoading())
        try {
              const res = await axios.post("/api/auth/register" , formData) ;

              dispatch({
                  type :REGISTER_USER ,
                  payload : res.data
              })
        } catch(error) {
            console.dir(error)
            const errorsArray = error.response.data.errors
            const msg = error.response.data.msg
           
            
            if(Array.isArray(errorsArray)){
             errorsArray.forEach(el=>alert(el.msg))
         }
         if(msg)
         {
             alert(msg)
         }
            dispatch({
             type : AUTH_ERROR
         })
         }
    }

    // login user 

    export const login = (formData) =>async (dispatch) =>{
        dispatch(setLoading())
        try {
              const res = await axios.post("/api/auth/login" , formData) ;

              dispatch({
                  type :LOGIN_USER ,
                  payload : res.data
              })
        } catch(error) {
           console.dir(error)
           const errorsArray = error.response.data.errors
           const msg = error.response.data.msg
          
           
           if(Array.isArray(errorsArray)){
            errorsArray.forEach(el=>alert(el.msg))
        }
        if(msg)
        {
            alert(msg)
        }
           dispatch({
            type : AUTH_ERROR
        })
        }
    }



    // get auth user

    export const getAuthUser = () => async (dispatch) => {
        console.log("getAuthUser")
        dispatch(setLoading())
        try {
            console.log(localStorage.getItem("token") )
         const option = {
             headers :{
                authorization : localStorage.getItem("token") 
             }
            
         }
             
              const res = await axios.get("/api/auth/dashborduser" , option)
               console.log("res", res)
              dispatch ({
                  type : GET_AUTH_USER ,
                  payload : res.data ,
              })
        }catch(error){
          console.log(error)
          dispatch({
              type : AUTH_ERROR
          })
        }
    }

// get auth admin

    export const getAuthAdmin = () => async (dispatch) => {
        dispatch(setLoading())
        try {
         const option = {
             headers :{
                authorization : localStorage.getItem("token") 
             }
            
         }

              const res = await axios.get("/api/auth/dashbordadmin" , option)
              dispatch ({
                  type : GET_AUTH_ADMIN ,
                  payload : res.data ,
              })
        }catch(error){
          console.log(error)
          dispatch({
              type : AUTH_ERROR
          })
        }
    }




    const setLoading = () => dispatch => {
        dispatch({
            type :  SET_LOADING
        })
    }


    export const logout = () => dispatch =>{
        dispatch({
            type:LOGOUT
        })
    }
//////////////////////////////////////////////////////////
//get
export const get_user=()=>dispatch=>{
     const option = {
             headers :{
                authorization : localStorage.getItem("token") 
             }
            
         }
    axios.get('/api/admin/getuser', option)
    .then( res=>dispatch({type:GET_USER , payload:res.data}))
    .catch(error=>console.log(error))
}

//delete
export const delete_user =(iduser)=> dispatch=>{
     const option = {
             headers :{
                authorization : localStorage.getItem("token") 
             }
            
         }
    axios.delete(`/api/admin/deleteuser/${iduser}`, option)
    .then( res=>dispatch(get_user()))
    .catch(error=>console.log(error))
}
//edit
 const option = {
             headers :{
                authorization : localStorage.getItem("token") 
             }
            
         }
export const edit_user=(iduser , newuser)=>dispatch=>{
    axios.put(`/api/admin/edituser/${iduser}`,newuser)
    .then( res=>dispatch(get_user()))
    .catch(error=>console.log(error))
}

////////////////////////////////////////////////////////////////////////
//get
export const get_station=()=>dispatch=>{
     const option = {
             headers :{
                authorization : localStorage.getItem("token") 
             }
            
         }
    axios.get('/api/workadmin/getstation', option)
    .then( res=>dispatch({type:GET_STATION , payload:res.data}))
    .catch(error=>console.log(error))
}

//delete

export const delete_station =(idstation)=> dispatch=>{
    const option = {
             headers :{
                authorization : localStorage.getItem("token") 
             }
            
         }
    axios.delete(`/api/workadmin/deletestation/${idstation}`,option)
    .then( res=>dispatch(get_station()))
    .catch(error=>console.log(error))
}
//Add Station
export const add_station=( newstation)=>dispatch=>{
    const option = {
             headers :{
                authorization : localStorage.getItem("token") 
             }
            
         }
    axios.post(`/api/workadmin/addstation`,newstation,option)
    .then( res=>dispatch(get_station()))
    .catch(error=>console.log(error))
}

//edit
export const edit_station=(idstation , newstation)=>dispatch=>{
    const option = {
             headers :{
                authorization : localStorage.getItem("token") 
             }
            
         }
    axios.put(`/api/workadmin/editstation/${idstation}`,newstation,option)
    .then( res=>dispatch(get_station()))
    .catch(error=>console.log(error))
}
///////////////////////////////////////////////////////////////////////
export const get_stationuser=()=>dispatch=>{
      const option = {
             headers :{
                authorization : localStorage.getItem("token") 
             }
            
         }
    axios.get('/api/workuser/getstationuser')
    .then( res=>dispatch({type:GET_STATION , payload:res.data}))
    .catch(error=>console.log(error))
}

export const edit_stationuser=(idstation , newstation)=>dispatch=>{
    console.log(newstation)
      const option = {
             headers :{
                authorization : localStorage.getItem("token") 
             }
            
         }
    axios.put(`/api/workuser/editstationuser/${idstation}`,newstation,option)
    .then( res=>dispatch(get_station()))
    .catch(error=>console.log(error))
}
