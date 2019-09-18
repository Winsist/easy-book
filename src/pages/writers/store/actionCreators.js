import * as actionTypes from './actionType'
import axios from 'axios';


const getList =(data)=>({
    type:actionTypes.GET_WRITERS,
    data,
})
const getListMore =(data,page)=>({
    type:actionTypes.GET_WRITERSMORE,
    data,
    page
})

export const getListAction = ()=>{
    return (dispatch)=>{
        axios.get('/api/writersList.json').then((res)=>{
            const data = res.data;
            const action = getList(data);
            dispatch(action)
        })
    }
}

export const getListMoreAction = (page)=>{
    return (dispatch)=>{
        axios.get('/api/writersList.json?page='+page).then((res)=>{
            const data = res.data;
            const action = getListMore(data,page);
            dispatch(action)
        })
    }
}