import React, { Component,Fragment } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store'
import { Link } from 'react-router-dom'


class Writer extends Component {
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

    getWriters(){
        const {writerList,writersPage} = this.props;
        const newWriterList=[];
        if(writerList.length){
            for(let i=(writersPage-1)*5;i<writersPage*5;i++){
                newWriterList.push(
                    <li className="writer-item" key={writerList[i].id}>
                        <a href='/'><img className="writer-pic" src={writerList[i].imgUrl} alt=""/></a>
                        <p className="writer-name">{writerList[i].name}</p><br/>
                        <p className="writer-desc">{writerList[i].desc}</p>
                        <span className='focus-people'>
                            <i className='iconfont icon-right icon add'>&#xe624;</i>
                            <span className="focus">关注</span>
                        </span>
                    </li>
                )
            }
        }
        return(
            <ul className="writer-list">
                {newWriterList}
            </ul>
        )
    }

    render() { 
        const {writersPage,writersTotalPage,changeWriter} = this.props;
        return ( 
             <Fragment>
                 <div className="writers">
                    <div className="write-top">
                        <span className='write-people'>推荐作者</span>
                        <span className='change'>
                            <i className='iconfont icon-right icon'>&#xe746;</i>
                            <span className='change-item' onClick={()=>changeWriter(writersPage,writersTotalPage)}>换一批</span>
                        </span> 
                    </div>
                    {
                        this.getWriters()
                    }
                    <Link to="/recommendwriters">
                        <div className="btn-all">
                            <span>查看全部 <i className='iconfont icon'>&#xe615;</i></span>
                        </div>
                    </Link>
                 </div>
             </Fragment>
         );
    }
    componentDidMount(){
        this.props.getHomeListAction()
    }
}


const mapStateToProps=(state)=>{
    return {
        writerList:state.home.writerList,
        writersPage:state.home.writersPage,
        writersTotalPage:state.home.writersTotalPage,
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        getHomeListAction(){
            const action = actionCreators.homeListAction();
            dispatch(action);
        },
        changeWriter(writersPage,writersTotalPage){
            if(writersPage<writersTotalPage){
                writersPage=writersPage+1;
                const action =actionCreators.changePageAction(writersPage);
                dispatch(action)
            }else{
                writersPage=1;
                const action =actionCreators.changePageAction(writersPage);
                dispatch(action)
            }
        }
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(Writer);