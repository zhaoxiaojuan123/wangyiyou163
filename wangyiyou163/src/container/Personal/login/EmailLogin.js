import React from "react";
import './index.less';
import BackHeader from "../../../component/BackHeader/BackHeader";
import {NavLink} from "react-router-dom";
export default class EmailLogin extends React.Component{
    render(){
        return <div className="login">
            <BackHeader/>
            <div className="loginWrap loginWrap-1">
                <div className="view">
                    <div className="logo">
                        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png"></img>
                    </div>
                    <div className="ursBox ursBox-2">
                        
                    </div>
                    <div className="foot">
                        <NavLink to="/personal">
                            <div className="w-button w-button-xl w-button-block w-button-ghostRed">
                                <span>其他登录方式</span>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>

        </div>
    }
}