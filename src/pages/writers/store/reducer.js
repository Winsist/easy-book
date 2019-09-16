import * as actionTypes from './actionType'

const defaultState={
    list:[]
}

export default (state = defaultState,action)=>{
    if(action.type===actionTypes.GET_WRITERS){
        const newState=JSON.parse(JSON.stringify(state));
        newState.list=action.data.writersList;
        return newState;
    }

    return state;
}