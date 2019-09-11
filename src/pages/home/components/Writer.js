import React, { Component,Fragment } from 'react';

class Writer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
             <Fragment>
                 <div className="writers">
                    <div className="write-top">
                        <span className='write-people'>推荐作者</span>
                        <span className='change'>
                            <i className='iconfont icon-right icon'>&#xe746;</i>
                            <span className='change-item'>换一批</span>
                        </span> 
                    </div>
                    <ul className="writer-list">
                        <li className="writer-item">
                            <a href='/'><img className="writer-pic" src="//upload.jianshu.io/users/upload_avatars/52841/251f5481-67b6-4bf0-86f4-faac9768beb3.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" /></a>
                            <p className="writer-name">梦云小小w</p><br/>
                            <p className="writer-desc">写了13.5k字 40.2k喜欢</p>
                            <span className='focus-people'>
                                <i className='iconfont icon-right icon add'>&#xe624;</i>
                                <span className="focus">关注</span>
                            </span>
                        </li>
                        <li className="writer-item">
                            <a href='/'><img className="writer-pic" src="//upload.jianshu.io/users/upload_avatars/52841/251f5481-67b6-4bf0-86f4-faac9768beb3.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" /></a>
                            <p className="writer-name">梦云小小w</p><br/>
                            <p className="writer-desc">写了13.5k字 40.2k喜欢</p>
                            <span className='focus-people'>
                                <i className='iconfont icon-right icon add'>&#xe624;</i>
                                <span className="focus">关注</span>
                            </span>
                        </li>
                    </ul>
                 </div>
             </Fragment>
         );
    }
}
 
export default Writer;