import * as actionTypes from './actionType'
import axios from 'axios';

export const focusInputAction = ()=> ({
    type:actionTypes.FOCUS_INPUT,
    focus:true
})

export const blurInputAction = ()=> ({
    type:actionTypes.BLUR_INPUT,
    focus:false
})

const changeList = (data) => ({
    type:actionTypes.CHANGE_LIST,
    data
})

export const getList = ()=>{
    return (dispatch)=>{
        axios.get('/api/headerList.json').then((res)=>{
            const data = res.data;
            dispatch(changeList(data.data))
        })
    }
}