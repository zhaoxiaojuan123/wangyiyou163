import React from 'react';
import linebox from '../../../../server/mock/linebox'
export default class Family extends React.Component{
    constructor(){
        super();
        this.state={linebox:linebox}
    }
    render(){
        return <div className="family">
            <div className="header-img">
                <img src="http://yanxuan.nosdn.127.net/7e2963bccfe5f913d45b99d9603c7332.jpg?imageView&thumbnail=0x196&quality=75" alt=""/>
            </div>
            <div className="content">
                <div className="second">床品</div>
                <ul>
                    {this.state.linebox.map((item,index)=>{
                        return <li className="pic" key={index}>
                            <img src={item.img} alt=""/>
                            <p>{item.describe}</p>
                        </li>
                    })}

                </ul>

            </div>
        </div>
    }
}
