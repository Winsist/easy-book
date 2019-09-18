import React, { Component ,Fragment} from 'react';
import '../../style/home.less'
import { connect } from 'react-redux'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { actionCreators } from './store';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.content!==this.props.content){
            return false;
        }else{
            return true;
        }
    }

    handleScrollTop(){
        window.scrollTo(0,0)
    }


    render() { 
        const {showScroll,showtext,handleShowText,handleHideText} =this.props;
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
                <div className={showScroll?'scrollTop show-scroll':'scrollTop'} onClick={this.handleScrollTop}
                onMouseEnter={handleShowText}
                onMouseLeave={handleHideText}
                >
                    <i className="iconfont">&#xe604;</i>
                </div>
                <p className={showtext?'scroll-text show':'scroll-text'}>回到顶部</p>
            </Fragment>
         );
    }
    componentDidMount(){
        this.bindEvents()
    }
    bindEvents(){
        window.addEventListener('scroll',this.props.changeScroll)
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.props.changeScroll)
    }
}


const stateToProps = (state)=>{
    return{
        showScroll:state.home.showScroll,
        showtext:state.home.showtext
    }
}


const dispatchToProps = (dispatch)=>{
    return{
        changeScroll(){
            if(document.documentElement.scrollTop>200){
                const action = actionCreators.toggleScrollAction(true);
                dispatch(action)
            }else{
                const action = actionCreators.toggleScrollAction(false);
                dispatch(action)
            }
        },
        handleShowText(){
            const action = actionCreators.showTextAction();
            dispatch(action)
        },
        handleHideText(){
            const action = actionCreators.hideTextAction();
            dispatch(action)
        }
    }
}

export default connect(stateToProps,dispatchToProps)(Home);