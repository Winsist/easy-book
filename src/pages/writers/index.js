import React, { Component,Fragment } from 'react';
import { connect } from 'react-redux';
import '../../style/writers.less'
import store from '../../store'
import { actionCreators } from './store'


class RecommendWriters extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Fragment>
                <div className="r-writers">
                    <div className="w-pic-wrapper">
                        <img src="//cdn2.jianshu.io/assets/web/recommend-author-03cc8798d5cc3f986e49cbcb2eb63079.png" 
                        className="w-pic" alt="" />
                        <span className="how-do">如何成为签约作者？</span>
                    </div>
                    <ul className="list">
                        {
                            this.props.list.map((item,index)=>{
                                return(
                                    <li className="item" key={index}>
                                        <div className="item-wrapper">
                                            <img src={item.avatar} className="avatar" alt="" />
                                            <h4 className="name">
                                                {item.name} <i className="iconfont">&#xe602;</i>
                                            </h4>
                                            <p className="desc">{item.desc}</p>
                                            <div className="w-foucs"><i className="iconfont">&#xe603;</i> 关注</div>
                                            <div className="meta">最近更新</div>
                                            <hr />
                                            <div className="recent-update">
                                                <a href="/" target="_blank" className="new">{item.update1}</a>
                                                <a href="/" target="_blank" className="new">{item.update2}</a>
                                                <a href="/" target="_blank" className="new">{item.update3}</a>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                        }
                        
                    </ul>
                </div>
            </Fragment>
         );
    }

    componentDidMount(){
        const action = actionCreators.getListAction();
        store.dispatch(action);
    }
}

const mapStateToProps = (state)=>{
    return{
        list:state.writers.list
    }
}

const mapDisPatchToProps = (dispatch)=>{
    return{
        
    }
}

export default connect(mapStateToProps,mapDisPatchToProps)(RecommendWriters);