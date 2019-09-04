import React, { Component,Fragment } from 'react';
import '../../style/header.less'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Fragment>
                <div className="header">
                    <a href='/'>
                        <img src={require('../../statics/images/logo.png')} alt='logo' className='logo'/>
                    </a>
                    <ul className='header-list'>
                        <li className='left home'><i className='iconfont icon-right'>&#xe6fd;</i>首页</li>
                        <li className='left download'><i className='iconfont icon-right'>&#xe601;</i>下载App</li>
                        <li className='left search'>
                            <input type='text' placeholder='搜索' className='search-input'/>
                        </li>
                        <li className='right login'>登录</li>
                        <li className='right zuan'>
                            <img src={require('../../statics/images/zuan.png')} />
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
 
export default Header;