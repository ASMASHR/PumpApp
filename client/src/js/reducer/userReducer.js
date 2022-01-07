
import {GET_USER ,
        } from "../action/actionTypes"

const initialState ={
     user:[], 
     isLoad : true
}

 const  reducer =(state=initialState , action)=>{

    switch (action.type) {

        case GET_USER :
        return {...state, user : action.payload , isLoad:false}
  


        default:
            return state
    }
}
export default reducer