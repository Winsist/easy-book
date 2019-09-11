import React, { Component,Fragment } from 'react';

class Recommend extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Fragment>
                <div className="board">
                    <a href='/'><img className="board-pic" src="//cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png" alt=""/></a>
                    <a href='/'><img className="board-pic" src="//cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png" alt=""/></a>
                    <a href='/'><img className="board-pic" src="//cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png" alt=""/></a>
                    <a href='/'><img className="board-pic" src="//cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png" alt=""/></a>
                </div>
                <div className="code">
                    <img src="/images/code.jpg" className="code-pic" alt=""/>
                    <div className='download'>
                        <p className="phone">下载简书手机App ></p>
                        <p className="search-code">随时随地发现和创作内容</p>
                    </div>
                </div>
            </Fragment>
         );
    }
}
 
export default Recommend;