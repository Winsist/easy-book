import * as actionTypes from './actionType'
import axios from 'axios';

const getArticleList = (data) => ({
    type:actionTypes.GETARTICLE_LIST,
    data
})

export const articleListAction = ()=>{
    return (dispatch)=>{
        axios.get('/api/homeList.json').then((res)=>{
            const data = res.data;
            dispatch(getArticleList(data))
        })
    }
}
