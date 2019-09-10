import React, { Component ,Fragment} from 'react';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Fragment>
                <div>
                    <ul>
                        <li>
                            <h2>公告：关于暂停用户发布功能，并全面清查平台内容</h2>
                            <p>亲爱的简书用户 「简书」因个别上传作品用户违反《中华人民共和国网络安全法》《互联网信息服务管理办法》《互联网新闻信息服务管理规定》《互联网用户公...</p>
                            <p><span>4548</span><span>简书</span><span>7951</span></p>
                        </li>
                    </ul>
                    
                </div>
            </Fragment>
         );
    }
}
 
export default List;


