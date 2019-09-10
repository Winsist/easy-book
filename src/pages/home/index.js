import React, { Component ,Fragment} from 'react';
import '../../style/home.less'
import List from './components/List'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Fragment>
                <div className='main'>
                    <div className='left'>
                        <List/>
                    </div>
                    <div className='right'>right</div>
                </div>
            </Fragment>
         );
    }
}
 
export default Home;