import * as actionTypes from './actionType'
const defaultState={
    focus:false,
    list:[],
    mouseIn:false,
    page:1,
    totalPage:1
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
        newState.totalPage=action.totalPage;
        return newState;
    }
    if(action.type===actionTypes.MOUSE_IN){
        const newState=JSON.parse(JSON.stringify(state));
        newState.mouseIn=action.mouseIn;
        return newState;
    }
    if(action.type===actionTypes.MOUSE_OUT){
        const newState=JSON.parse(JSON.stringify(state));
        newState.mouseIn=action.mouseIn;
        return newState;
    }
    if(action.type===actionTypes.CHANGE_PAGE){
        console.log(action.page)
        const newState=JSON.parse(JSON.stringify(state));
        newState.page=action.page;
        return newState;
    }
    
    return state;
} 