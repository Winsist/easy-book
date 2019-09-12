import React, { Component,Fragment } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store'
import store from '../../../store'

class Writer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {writerList} = this.props;
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
                        {
                          writerList.map((item)=>{
                              return(
                                <li className="writer-item" key={item.id}>
                                    <a href='/'><img className="writer-pic" src={item.imgUrl} alt=""/></a>
                                    <p className="writer-name">{item.name}</p><br/>
                                    <p className="writer-desc">{item.desc}</p>
                                    <span className='focus-people'>
                                        <i className='iconfont icon-right icon add'>&#xe624;</i>
                                        <span className="focus">关注</span>
                                    </span>
                                </li>
                              )
                          })  
                        }
                        
                    </ul>
                    <div className="btn-all">查看全部 <i className='iconfont icon'>&#xe615;</i></div>
                 </div>
             </Fragment>
         );
    }
    componentDidMount(){
        const action = actionCreators.homeListAction();
        store.dispatch(action);
    }
}


const mapStateToProps=(state)=>{
    return {
        writerList:state.home.writerList
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {

    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(Writer);