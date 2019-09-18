import React, { Component } from 'react';

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
            <div>detail</div>
         );
    }
}
 
export default Detail;