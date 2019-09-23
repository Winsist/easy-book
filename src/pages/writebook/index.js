import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'

class WriteBook extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    isWriteBook(){
        if(this.props.loginStatus){
            return  (
                <div>写文章。。。</div>
            )
        }else{
            return  <Redirect to="/login" />
        }
    }
    render() { 
        return (
            this.isWriteBook()
         );
            
         
    }
}

const mapStateToProps = (state) =>{
    return{
        loginStatus:state.login.loginStatus
    }
}
 
export default connect(mapStateToProps,null)(WriteBook);