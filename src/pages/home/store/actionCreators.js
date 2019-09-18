import * as actionTypes from './actionType'
import axios from 'axios';

const getHomeList = (data) => ({
    type:actionTypes.GETHOME_LIST,
    data,
    writersTotalPage:Math.ceil(data.writerList.length/5)
})

const getarticleList = (data,newpage) => ({
    type:actionTypes.GETARTICLE_LIST,
    data,
    newpage,
    
})

export const homeListAction = ()=>{
    return (dispatch)=>{
        axios.get('/api/homeList.json').then((res)=>{
            const data = res.data;
            const action=getHomeList(data)
            dispatch(action)
        })
    }
}

export const articleListAction = (page)=>{
    return (dispatch)=>{
        axios.get('/api/homeList.json?page='+page).then((res)=>{
            const data = res.data;
            const action=getarticleList(data,page)
            dispatch(action)
        })
    }
}

export const changePageAction = (writersPage)=> ({
    type:actionTypes.CHANGE_PAGE,
    writersPage
})

export const showCodeAction = ()=> ({
    type:actionTypes.SHOW_CODE,
    show:true
})

export const hideCodeAction = ()=> ({
    type:actionTypes.HIDE_CODE,
    show:false
})

export const toggleScrollAction = (showscroll)=> ({
    type:actionTypes.SHOW_SCROLL,
    showscroll
})

export const showTextAction = ()=> ({
    type:actionTypes.SHOW_TEXT,
    showtext:true
})

export const hideTextAction = ()=> ({
    type:actionTypes.HIDE_TEXT,
    showtext:false
})





