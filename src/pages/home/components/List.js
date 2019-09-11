import React, { Component ,Fragment} from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store'
import store from '../../../store'

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {articleList} = this.props;
        return ( 
            <Fragment>   
                <ul className='article-list'>
                    {
                       articleList.map((item)=>{
                           return(
                            <li className='article-item' key={item.id}>
                                <div className='article-z'>
                                    <h3 className='article-title'>{item.title}</h3>
                                    <p className='article-desc'>{item.desc}</p>
                                    <p className='article-row'>
                                        <i className='iconfont icon-right icon-red icon'>&#xe621;</i><span className='span-r-10 icon-red'>{item.bestnum}</span>
                                        <span className='span-r-10 icon-gray'>{item.name}</span>
                                        <i className='iconfont icon-right icon-gray icon'>&#xe602;</i><span className='span-r-10 icon-gray'>{item.likenum}</span>
                                        <i className='iconfont icon-right icon-gray icon-s'>&#xe611;</i><span className='icon-gray'>{item.moneynum}</span>
                                    </p>
                                </div>
                                <div className='article-y'>
                                    <img src={item.imgUrl} alt=""/>
                                </div>
                            </li>
                           )
                       }) 
                    }
                </ul>                    
            </Fragment>
         );
    }

    componentDidMount(){
        const action = actionCreators.articleListAction();
        store.dispatch(action);
        
    }
}

const mapStateToProps=(state)=>{
    return {
        articleList:state.home.articleList
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {

    }
}




export default connect(mapStateToProps,mapDispatchToProps)(List);


