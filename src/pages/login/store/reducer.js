import * as actionTypes from './actionType'

const defaultState={
    loginStatus:false
}

export default (state=defaultState,action)=>{
    if(action.type===actionTypes.GET_LOGIN){
        const newState=JSON.parse(JSON.stringify(state));
        newState.loginStatus=action.data.data;
        return newState;
    }
    if(action.type===actionTypes.GET_LOGOUT){
        const newState=JSON.parse(JSON.stringify(state));
        newState.loginStatus=action.loginStatus;
        return newState;
    }
  

    return state;
}