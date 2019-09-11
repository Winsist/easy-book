import * as actionTypes from './actionType'

const defaultState={
    articleList:[]
}

export default (state=defaultState,action)=>{
    if(action.type===actionTypes.GETARTICLE_LIST){
        const newState=JSON.parse(JSON.stringify(state));
        newState.articleList=action.data.articleList;
        return newState;
    }
    
    return state;
}