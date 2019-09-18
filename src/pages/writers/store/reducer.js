import * as actionTypes from './actionType'

const defaultState={
    list:[],
    page:1
}

export default (state = defaultState,action)=>{
    if(action.type===actionTypes.GET_WRITERS){
        const newState=JSON.parse(JSON.stringify(state));
        newState.list=action.data.writersList; 
        return newState;
    }
    if(action.type===actionTypes.GET_WRITERSMORE){
        const newState=JSON.parse(JSON.stringify(state));
        newState.list=newState.list.concat(action.data.writersList); 
        newState.page=action.page;
        return newState;
    }


    return state;
}