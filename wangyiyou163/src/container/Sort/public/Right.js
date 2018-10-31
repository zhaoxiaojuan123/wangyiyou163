import React from 'react';
import linebox from '../../../../server/mock/linebox';
import './right.less'
export default class Family extends React.Component{

    render(){
        return <div className="content">
                    {this.props.data.map((item,index)=>{
                        if(item.type=='headImg'){
                            return <div className="header-img" key={index}>
                                <img src={item.img} alt=""/>
                            </div>
                        }
                        if(item.type=='title'){
                           return <div className="second" key={index}>{item.title}</div>
                        }else {
                            return <li className="pic" key={index}>
                                    <img src={item.url} alt=""/>
                                    <p>{item.title}</p>
                                </li>

                        }
                    })}
            </div>

    }
}

