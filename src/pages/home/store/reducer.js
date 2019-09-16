import * as actionTypes from './actionType'

const defaultState={
    articleList:[],
    writerList:[],
    page:1,
    writersPage:1,
    writersTotalPage:1,
    show:false
}

export default (state=defaultState,action)=>{
    if(action.type===actionTypes.GETHOME_LIST){
        const newState=JSON.parse(JSON.stringify(state));
        newState.articleList=action.data.articleList;
        newState.writerList=action.data.writerList;
        newState.writersTotalPage=action.writersTotalPage;
        return newState;
    }
    if(action.type===actionTypes.GETARTICLE_LIST){
        const newState=JSON.parse(JSON.stringify(state));
        newState.articleList=newState.articleList.concat(action.data.articleList);
        newState.page=action.newpage;
        console.log(newState.page);
        return newState;
    }
    if(action.type===actionTypes.CHANGE_PAGE){
        const newState=JSON.parse(JSON.stringify(state));
        newState.writersPage=action.writersPage;
        return newState;
    }
    if(action.type===actionTypes.SHOW_CODE){
        const newState=JSON.parse(JSON.stringify(state));
        newState.show=action.show;
        return newState;
    }
    if(action.type===actionTypes.HIDE_CODE){
        const newState=JSON.parse(JSON.stringify(state));
        newState.show=action.show;
        return newState;
    }

    return state;
}