import React from 'react';
import Right from '../public/Right'
import linebox from '../../../../server/mock/linebox';
import {connect} from 'react-redux';
import action from '../../../store/actionsll'
class Bag extends React.Component{
    constructor(){
        super();
        this.state={linebox:linebox}
    }
    componentDidMount(){
        this.props.getBagImg()
    }
    render(){
        console.log(this.props.bag);
        return <div>
            <Right data={this.props.bag}/>
        </div>
    }
}
export default connect(state=>({...state.sort}),action)(Bag)