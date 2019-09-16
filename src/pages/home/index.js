import React, { Component ,Fragment} from 'react';
import '../../style/home.less'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    // scrollToTop(){
    //     window.onscroll(0,0)
    // }


    render() { 
        return ( 
            <Fragment>
                <div className='main'>
                    <div className='left'>
                        <List/>
                    </div>
                    <div className='right'>
                        <Recommend />
                        <Writer />
                    </div>
                </div>
                <div className="scrollTop">
                    <i className="iconfont">&#xe604;</i>
                </div>
                <p className="scroll-text">回到顶部</p>
            </Fragment>
         );
    }
}
 

export default Home;