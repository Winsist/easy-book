import * as actionTypes from './actionType'
import axios from 'axios';

const changeList = (data) => ({
    type:actionTypes.CHANGE_LIST,
    data,
    totalPage:Math.ceil(data.length/10)
})

export const focusInputAction = ()=> ({
    type:actionTypes.FOCUS_INPUT,
    focus:true
})

export const blurInputAction = ()=> ({
    type:actionTypes.BLUR_INPUT,
    focus:false
})

export const getList = ()=>{
    return (dispatch)=>{
        axios.get('https://www.easy-mock.com/mock/5d78990220e12a74f8e15405/headerList').then((res)=>{
            const data = res.data;
            dispatch(changeList(data.data))
        })
    }
}

export const mouseInBoxAction = ()=> ({
    type:actionTypes.MOUSE_IN,
    mouseIn:true
})

export const mouseOutBoxAction = ()=> ({
    type:actionTypes.MOUSE_OUT,
    mouseIn:false
})

export const changePageAction = (page)=> ({
    type:actionTypes.CHANGE_PAGE,
    page
})