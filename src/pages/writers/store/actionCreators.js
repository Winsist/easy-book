import * as actionTypes from './actionType'
import axios from 'axios';


const getList =(data)=>({
    type:actionTypes.GET_WRITERS,
    data
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