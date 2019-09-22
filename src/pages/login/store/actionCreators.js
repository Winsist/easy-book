import * as actionTypes from './actionType'
import axios from 'axios';



const getLoginResult = (data)=>({
    type:actionTypes.GET_LOGIN,
    data
})

export const loginAction = ()=>{
    return (dispatch)=>{
        axios.get('/api/login.json').then((res)=>{
            const data = res.data;
            console.log(data.data)
            const action=getLoginResult(data)
            dispatch(action)
        })
    }
}






