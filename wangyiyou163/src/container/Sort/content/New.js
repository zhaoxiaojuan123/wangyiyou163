import React from 'react';
import RightContent from '../public/RightContent';
import Circledata from '../../../../server/mock/Circledata';
import './index.less';
import {connect} from 'react-redux';
import action from '../../../store/actionsll'
class New extends React.Component{
    constructor(){
        super();
        this.state={circledata:Circledata}
    }
    componentDidMount(){
        this.props.getNewImg()
    }
    render(){
        //console.log(this.props.new);
        return <div className="autumn">
            <div className="header-img">
                <img src="http://yanxuan.nosdn.127.net/c8c1509aa775a7adb276b4537ffa6cff.jpg?imageView&thumbnail=0x196&quality=75" alt=""/>
            </div>
            <RightContent  data={this.props.new}/>

        </div>
    }
}
export default connect(state=>({...state.sort}),action)(New)