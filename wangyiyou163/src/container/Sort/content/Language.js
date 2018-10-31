import React from 'react';
import Right from '../public/Right'
import {connect} from 'react-redux';
import action from '../../../store/actionsll'
class Language extends React.Component{
    componentDidMount(){
        this.props. getWashImg()
    }
    render(){
        console.log(this.props);
        return <div>
            <Right data={this.props.wash}/>
        </div>
    }
}
export default connect(state=>({...state.sort}),action)(Language)