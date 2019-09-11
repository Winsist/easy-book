import React, { Component,Fragment } from 'react';
import '../../../style/header.less'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionCreators } from './store'


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    getListArea(){
        const {focus,mouseIn,list,page,totalPage,changePage}=this.props;
        const pageList=[];
        if(list.length){
            for(let i=(page-1)*10;i<page*10;i++){
                pageList.push(
                    <li className='search-item' key={list[i]}><a href='/' target='_blank'>{list[i]}</a></li>
                )
            }
        }
        if(focus || mouseIn){
            return(
                <div className='search-tips'>
                    <div className='search-tips-top clearfix'>
                        <span className='hot-search'>热门搜索</span>
                        <span className='change-item' onClick={()=>{changePage(page,totalPage)}}>换一批</span>
                        <i className='iconfont icon-right' style={{float:'right',"lineHeight":'20px'}}>&#xe746;</i>
                    </div>
                    <ul className='search-tips-bottom'>
                        {pageList}
                    </ul>
                </div>
            )
        }
    }
    render() { 
        const {focus,focusInput,blurInput,list,mouseIn,mouseInBox,mouseOutBox} = this.props;
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
                                onFocus={()=>focusInput(list)}
                                onBlur={blurInput}
                                />
                            </CSSTransition>
                            <i className={focus?'iconfont search-icon focused':'iconfont search-icon'}>&#xe649;</i>
                            <div className={(focus || mouseIn)?'search-tips-box show':'search-tips-box'} 
                            onMouseEnter={mouseInBox}
                            onMouseLeave={mouseOutBox}
                            >
                                {this.getListArea()}
                                
                            </div>
                        </li>
                        <li className='right login'>登录</li>
                        <li className='right zuan'>
                            <img src={require('../../../statics/images/zuan.png')} alt=""/>
                        </li>
                        <li className='right word'>Aa</li>
                    </ul>
                    <a href='/' className='write'><i className='iconfont'>&#xe616;</i> 写文章</a>
                    <a href='/' className='register'>注册</a>
                </div>
            </Fragment>
         );
    }
}
 

const mapStateToProps = (state) =>{
    return{
        focus:state.header.focus,
        list:state.header.list,
        mouseIn:state.header.mouseIn,
        page:state.header.page,
        totalPage:state.header.totalPage,
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        focusInput(list){
            if(list.length===0){
                dispatch(actionCreators.getList())
            }
            dispatch(actionCreators.focusInputAction())
            
        },
        blurInput(){
            const action =actionCreators.blurInputAction();
            dispatch(action)
        },
        mouseInBox(){
            const action =actionCreators.mouseInBoxAction();
            dispatch(action)
        },
        mouseOutBox(){
            const action =actionCreators.mouseOutBoxAction();
            dispatch(action)
        },
        changePage(page,totalPage){
            if(page<totalPage){
                page=page+1;
                const action =actionCreators.changePageAction(page);
                dispatch(action)
            }else{
                page=1;
                const action =actionCreators.changePageAction(page);
                dispatch(action)
            }
            
        }
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(Header);