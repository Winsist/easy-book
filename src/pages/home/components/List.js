import React, { Component ,Fragment} from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store'
import { Link } from 'react-router-dom'

class List extends Component {
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
        const {articleList,loadMore,page} = this.props;
        return ( 
            <Fragment>   
                <ul className='article-list'>
                    {
                       articleList.map((item,index)=>{
                           return(
                            <Link to={'/detail/id='+item.id}>
                                <li className='article-item' key={index}>
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
                            </Link> 
                           )
                       }) 
                    }
                </ul> 
                <div className="load-more" onClick={()=>{loadMore(page)}}>阅读更多</div> 
                <div className="self-desc">
                    <p className="about">关于简书 · 联系我们 · 加入我们 · 简书出版 · 品牌与徽标 · 帮助中心 · 合作伙伴</p>
                    <p className="mengyun">©2019.9.12 梦云小小w / 仿简书 / 来自一个可爱热情开朗美丽的前端渣渣~ ❥(^_-)</p>
                </div>                  
            </Fragment>
         );
    }

    componentDidMount(){
        this.props.getHomeList();
    }
}

const mapStateToProps=(state)=>{
    return {
        articleList:state.home.articleList,
        page:state.home.page,
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        getHomeList(){
            const action = actionCreators.homeListAction();
            dispatch(action);
        },
        loadMore(page){
            const action = actionCreators.articleListAction(page+1);
            dispatch(action);
        }
    }
}




export default connect(mapStateToProps,mapDispatchToProps)(List);


