import React from 'react';
import Right from '../public/Right';
import {connect} from 'react-redux';
import action from '../../../store/actionsll'
class Wash extends React.Component{
    componentDidMount(){
         this.props.getWashImg()
    }
    render(){
        console.log(this.props);
        return <div className="autumn">
            <Right data={this.props.wash}/>

        </div>
    }
}
export default connect(state=>({...state.sort}),action)(Wash)