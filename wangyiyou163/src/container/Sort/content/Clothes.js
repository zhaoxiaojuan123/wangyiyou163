import React from 'react';
import Right from '../public/Right'
import linebox from '../../../../server/mock/linebox';
import {connect} from 'react-redux';
import action from '../../../store/actionsll'
class Clothes extends React.Component{
    componentDidMount(){
        this.props.getClothesImg()
    }
    render(){
        //console.log(this.props);
        return <div>
            <Right data={this.props.clothes}/>
        </div>
    }
}
export default connect(state=>({...state.sort}),action)(Clothes)