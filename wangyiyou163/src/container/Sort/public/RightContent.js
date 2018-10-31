import React from 'react';
import Circledata from '../../../../server/mock/Circledata';
import './index.less'
import HeaderImg from "./Circle";
export default class Recommend extends React.Component{
    constructor(){
        super();
    }
    render(){
        //console.log(this.props.data);
        return <div className="recommend">

            <ul className="list">
                {this.props.data.map((item,index)=>{
                    return <li key={index} className="item">
                        <img src={item.url} alt=""/>
                        <div className="title">{item.title}</div>
                    </li>
                })}
            </ul>
        </div>
    }
}
