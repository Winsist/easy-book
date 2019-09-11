import React, { Component ,Fragment} from 'react';
import '../../style/home.less'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'

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
                    <div className='right'>
                        <Recommend />
                        <Writer />
                    </div>
                </div>
            </Fragment>
         );
    }
}
 
export default Home;