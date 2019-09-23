import * as actionTypes from './actionType'
import axios from 'axios';



const getLoginResult = (data)=>({
    type:actionTypes.GET_LOGIN,
    data
})

export const loginAction = (account,password)=>{
    return (dispatch)=>{
        axios.get('/api/login.json?account='+account+'&password='+password).then((res)=>{
            const data = res.data;
            console.log(data.data);
            if(data.data){
                const action=getLoginResult(data)
                dispatch(action)
            }else{
                alert('登录失败')
            }
        })
    }
}

export const logOut = ()=>({
    type:actionTypes.GET_LOGOUT,
    loginStatus:false
})






