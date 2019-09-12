import * as actionTypes from './actionType'

const defaultState={
    articleList:[],
    writerList:[],
    page:1
}

export default (state=defaultState,action)=>{
    if(action.type===actionTypes.GETHOME_LIST){
        const newState=JSON.parse(JSON.stringify(state));
        newState.articleList=action.data.articleList;
        newState.writerList=action.data.writerList;
        return newState;
    }
    if(action.type===actionTypes.GETARTICLE_LIST){
        const newState=JSON.parse(JSON.stringify(state));
        newState.articleList=newState.articleList.concat(action.data.articleList);
        newState.page=action.newpage;
        console.log(newState.page);
        return newState;
    }

    return state;
}