import React from 'react';
import HeaderImg from '../public/HeaderImg';
import Circle  from '../public/Circle';
import Circledata from '../../../../server/mock/Circledata';
import './index.less';
import RightContent from '../public/RightContent';
import {connect} from 'react-redux'
import action from '../../../store/actionsll'
class Recommend extends React.Component{
    constructor(){
        super();
        this.state={circledata:Circledata}
    }
    componentDidMount(){
        this.props.getRightContent();
    }
    render(){
        console.log(this.props);
        return <div className="recommend">
            {/*<div className="header-img">*/}
                {/*<img src="http://yanxuan.nosdn.127.net/7e2963bccfe5f913d45b99d9603c7332.jpg?imageView&thumbnail=0x196&quality=75" alt=""/>*/}
            {/*</div>*/}
             {/*<ul className="list">*/}
                 {/*{this.state.circledata.map((item,index)=>{*/}
                     {/*return <li key={index} className="item">*/}
                         {/*<img src={item.url} alt=""/>*/}
                         {/*<div className="title">{item.title}</div>*/}
                     {/*</li>*/}
                 {/*})}*/}
             {/*</ul>*/}
             <RightContent data={this.props.rightContent}/>
        </div>
    }
}
export default connect(state=>({...state.sort}),action)(Recommend)