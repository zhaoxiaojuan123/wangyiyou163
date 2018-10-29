import React from 'react';
import RightContent from '../public/RightContent';
import Circledata from '../../../../server/mock/Circledata';
import HeaderImg from '../public/HeaderImg'
import './index.less';
import {connect} from 'react-redux'
import action from '../../../store/actionsll';
class Autumn extends React.Component{
    constructor(){
        super();
        this.state={circledata:Circledata}
    }
    componentDidMount(){
        this.props.getRightContent();
        this.props.getImgs();
        this.props.getAutumnImg();

    }
    render(){
        //console.log(this.props.nav);
        return <div className="autumn">
            {/*<RightContent  data={this.state.circledata}/>*/}
            <div className="header-img">
                <img src="http://yanxuan.nosdn.127.net/be075aaa987d0e2f5cebabe6c223171b.jpg?imageView&thumbnail=0x196&quality=75" alt=""/>
            </div>
            <RightContent  data={this.props.autumn}/>

        </div>
    }
}
export default connect(state=>({...state.sort}),action)(Autumn)