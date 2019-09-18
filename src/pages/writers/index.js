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
    
    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.content!==this.props.content){
            return false;
        }else{
            return true;
        }
    }
    
    render() { 
        const {list,loadMore,page} = this.props;
        return ( 
            <Fragment>
                <div className="r-writers">
                    <div className="w-pic-wrapper">
                        <img src="//cdn2.jianshu.io/assets/web/recommend-author-03cc8798d5cc3f986e49cbcb2eb63079.png" 
                        className="w-pic" alt="" />
                        <span className="how-do"><i className="iconfont">&#xe719;</i>如何成为签约作者？</span>
                    </div>
                    <ul className="list">
                        {
                            list.map((item,index)=>{
                                return(
                                    <li className="item" key={index}>
                                        <div className="item-wrapper">
                                            <img src={item.avatar} className="avatar" alt="" />
                                            <h4 className="name">
                                                {item.name} 
                                                
                                                
                                                <i className={item.sex===1?'iconfont woman':'iconfont man'}>{item.sex===1?'\ue620':'\ue835'}</i>
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
                    <div className="load-more" onClick={()=>loadMore(page)}>加载更多</div>
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
        list:state.writers.list,
        page:state.writers.page
    }
}

const mapDisPatchToProps = (dispatch)=>{
    return{
        loadMore(page){
            const action = actionCreators.getListMoreAction(page+1);
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps,mapDisPatchToProps)(RecommendWriters);