import * as actionTypes from './actionType'
const defaultState={
    focus:false,
    list:[]
}

export default (state=defaultState,action)=>{
    if(action.type===actionTypes.FOCUS_INPUT){
        const newState=JSON.parse(JSON.stringify(state));
        newState.focus=action.focus;
        return newState;
    }
    if(action.type===actionTypes.BLUR_INPUT){
        const newState=JSON.parse(JSON.stringify(state));
        newState.focus=action.focus;
        return newState;
    }
    if(action.type===actionTypes.CHANGE_LIST){
        const newState=JSON.parse(JSON.stringify(state));
        newState.list=action.data;
        return newState;
    }
    
    return state;
} 