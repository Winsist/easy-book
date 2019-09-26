import React, { Component,Fragment } from 'react';
import '../../style/detail.less'

class Detail extends Component {
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
        return ( 
            <Fragment>
                <div className='detail-body'>
                    <div className='detail-main'>
                        <div className='detail-left'>
                            <h2 className='title'>我删掉了游戏《王者荣耀》</h2>
                            <p className='row'>
                                <i className='iconfont icon-right icon-red icon'>&#xe621;</i><span className='span-r-10 icon-red'>554</span>
                                <span className='span-r-10 icon-gray'>2019.09.19 11:07:32</span>
                                <span className='span-r-10 icon-gray'>字数 <span> 2038</span></span>
                                <span className='span-r-10 icon-gray'>阅读 <span> 131400</span></span>
                            </p>
                            <p className="name">文/沐丞</p>
                            <div className='pic-wrap'>
                                <img src="//upload-images.jianshu.io/upload_images/1417131-52d1bdc6e19156e5.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp" className='pic' alt="" />
                            </div>
                            <div className='content'>
                                <p>最近身边很多人都在玩手游《王者荣耀》，有的人在聚餐等上菜的时候也不忘晚上一局，每天中午午休的时候也有不少同事都在拼命厮杀。有时候在咖啡馆，看电影等放映的时候都看到有很多人在玩。关键是我身边玩这个游戏的人并不是小学生，而是三十岁左右的职场人，他们居然也对这个游戏乐此不疲。</p>
                                <p>最近身边很多人都在玩手游《王者荣耀》，有的人在聚餐等上菜的时候也不忘晚上一局，每天中午午休的时候也有不少同事都在拼命厮杀。有时候在咖啡馆，看电影等放映的时候都看到有很多人在玩。关键是我身边玩这个游戏的人并不是小学生，而是三十岁左右的职场人，他们居然也对这个游戏乐此不疲。</p>
                                <p>最近身边很多人都在玩手游《王者荣耀》，有的人在聚餐等上菜的时候也不忘晚上一局，每天中午午休的时候也有不少同事都在拼命厮杀。有时候在咖啡馆，看电影等放映的时候都看到有很多人在玩。关键是我身边玩这个游戏的人并不是小学生，而是三十岁左右的职场人，他们居然也对这个游戏乐此不疲。</p>
                                <p>仔细问问自己，2019年已经过去一大半，你完成了什么小目标？</p>
                                <p><br/></p>
                                <p>作者简介：简书、今日头条签约作者，LinkedIn专栏作者，随手记等各大财经类平台特邀理财作者。已出版个人理财书籍《理财要趁早》、《轻松做财女》，职场励志书籍《努力，是为了可以选择》。</p>
                            </div>
                            <div className='idea'>
                                <div className='idea-z'>
                                    <div className='up-wrap'>
                                        <i className='iconfont up'>&#xe600;</i>
                                    </div>
                                    <span style={{marginRight:'8px'}}>1314<span>人点赞 ></span></span>
                                    <div className='up-wrap'>
                                        <i className='iconfont up'>&#xe60d;</i>
                                    </div>
                                    <span>520<span>人踩 ></span></span>
                                </div>
                                <div className='idea-y'>
                                    <div className='sui-wrap'>
                                       <span><i className='iconfont sui'>&#xe6e0;</i> 随笔</span> 
                                    </div>
                                    <div className='up-wrap'>
                                        <i className='iconfont up'>&#xe60d;</i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='detail-right'>
                            <div className='self'>
                                <div className='self-top'>
                                    <img className='detail-pic' src="//upload.jianshu.io/users/upload_avatars/1417131/b0f33523aa79.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/90/h/90/format/webp" alt='' />
                                    <p className="detail-name">沐丞</p><br/>
                                    <p className="detail-desc">拥有2646钻（约462.35元）</p>
                                    <span className="focus">关注</span>
                                </div>
                                <div className='self-bottom'>
                                    <div className='detail-item'>
                                        <p>你是要大城市的一张床，还是小城市的一套房？</p>
                                        <span>阅读 193</span>
                                    </div>
                                    <div className='detail-item'>
                                        <p>你是要大城市的一张床，还是小城市的一套房？</p>
                                        <span>阅读 493</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='up-num'>
                        <div className='up-num-wrap'><i className='iconfont up'>&#xe600;</i></div>
                        <div>4525赞</div>
                    </div>
                </div>
            </Fragment>
         );
    }
}
 
export default Detail;