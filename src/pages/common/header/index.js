import React, { Fragment } from 'react';
import '../../../style/header.less'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionCreators } from './store'


const Header = (props)=>{
    const {focus,focusInput,blurInput,list} = props;
    return ( 
        <Fragment>
            <div className="header">
                <a href='/'>
                    <img src={require('../../../statics/images/logo.png')} alt='logo' className='logo'/>
                </a>
                <ul className='header-list'>
                    <li className='left home'><i className='iconfont icon-right'>&#xe6fd;</i>首页</li>
                    <li className='left download'><i className='iconfont icon-right'>&#xe601;</i>下载App</li>
                    <li className='left search'>
                        <CSSTransition 
                            in={focus}
                            timeout={200}           
                            classNames="slide"   
                        >
                            <input type='text' placeholder='搜索' className={focus?'search-input focused':'search-input'} 
                            onFocus={focusInput}
                            onBlur={blurInput}
                            />
                        </CSSTransition>
                        <i className={focus?'iconfont search-icon focused':'iconfont search-icon'}>&#xe649;</i>
                        <div className={focus?'search-tips-box show':'search-tips-box'}>
                            <div className='search-tips'>
                                <div className='search-tips-top clearfix'>
                                    <span className='hot-search'>热门搜索</span>
                                    <span className='change-item'>换一批</span>
                                    <i className='iconfont icon-right' style={{float:'right',"lineHeight":'20px'}}>&#xe718;</i>
                                </div>
                                <ul className='search-tips-bottom'>
                                    {
                                        list.map((item)=>{
                                            return (
                                                <li className='search-item' key={item}><a href='/' target='_blank'>{item}</a></li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className='right login'>登录</li>
                    <li className='right zuan'>
                        <img src={require('../../../statics/images/zuan.png')} />
                    </li>
                    <li className='right word'>Aa</li>
                </ul>
                <a href='/' className='write'><i className='iconfont'>&#xe616;</i> 写文章</a>
                <a href='/' className='register'>注册</a>
            </div>
        </Fragment>
     );
}



const mapStateToProps = (state) =>{
    return{
        focus:state.header.focus,
        list:state.header.list
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        focusInput(){
            dispatch(actionCreators.focusInputAction())
            dispatch(actionCreators.getList())
        },
        blurInput(){
            const action =actionCreators.blurInputAction();
            dispatch(action)
        }
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(Header);