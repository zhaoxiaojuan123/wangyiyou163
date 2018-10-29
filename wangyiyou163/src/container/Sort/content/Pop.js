import React from 'react';
import {connect} from 'react-redux';
import action from '../../../store/actionsll'
import RightContent from '../public/RightContent';
import Circledata from '../../../../server/mock/Circledata';
import './index.less'
class Pop extends React.Component{
    constructor(){
        super();
        this.state={circledata:Circledata}
    }
    componentDidMount(){
        this.props.getAutumnImg()
    }
    render(){
        //console.log(this.props.autumn);
        return <div className="autumn">
            <div className="header-img">
                <img src="http://yanxuan.nosdn.127.net/82cef264da1192ba26d6fc500386962f.jpg?imageView&thumbnail=0x196&quality=75" alt=""/>
            </div>
            <RightContent  data={this.props.autumn}/>

        </div>
    }
}
export default connect(state=>({...state.sort}),action)(Pop)