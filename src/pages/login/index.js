import React, { Component,Fragment } from 'react';
import '../../style/login.less'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import {Redirect} from 'react-router-dom'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {loginStatus} = this.props;
        if(!loginStatus){
            return ( 
                <Fragment>
                    <div className='login-wrap'>
                        <div className='logo-picwrap'>
                            <img className='logo-pic' src='//cdn2.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png' alt='' />
                        </div>
                        <div className='main'>
                            <div className='title'>
                                <span className='active'>登录</span>
                                <b>·</b>
                                <span>注册</span>
                            </div>
                            <div className='login-msg'>
                                <div className='phone'>
                                    <i className='iconfont'>&#xe602;</i>
                                    <input type='text' placeholder='手机号或邮箱' ref={(input)=>this.account=input}/>
                                </div>
                                <div className='phone'>
                                    <i className='iconfont'>&#xe602;</i>
                                    <input type='password' placeholder='密码' ref={(input)=>this.password=input}/>
                                </div>
                            </div>
                            <div className='re-fo'>
                                <div className='remember'>
                                    <input type='checkbox' checked/> 记住我
                                </div>
                                <div className='forget'>登录遇到问题？</div>
                            </div>
                            <div className='login-btn' onClick={()=>this.props.login(this.account,this.password)}>登录</div>
                        </div>
                    </div>
                </Fragment>
             );
        }else{
            return <Redirect to='/' />
        }
    }
}


const mapStateToProps = (state)=>{
    return{
        loginStatus:state.login.loginStatus
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        login(account,password){
            const action = actionCreators.loginAction(account.value,password.value) ;
            dispatch(action)
            console.log(account.value,password.value)
        }
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(Login);