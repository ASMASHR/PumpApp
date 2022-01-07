import {GET_STATION ,
        } from "../action/actionTypes"

const initialState ={
     station:[],
     isLoad : true
}

 const  reducer =(state=initialState , action)=>{

    switch (action.type) {

        case GET_STATION :
        return {...state, station : action.payload,isLoad:false}
  


        default:
            return state
    }
}
export default reducer