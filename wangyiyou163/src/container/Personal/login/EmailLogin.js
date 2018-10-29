import React from "react";
import './index.less';
import BackHeader from "../../../component/BackHeader/BackHeader";
import {NavLink} from "react-router-dom";
import EmailInput from "./emailInput";
export default class EmailLogin extends React.Component{
    render(){
        return <div className="login">
            <BackHeader/>
            <div className="loginWrap loginWrap-1">
                <div className="view">
                    <div className="logo">
                        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png"></img>
                    </div>
                    <EmailInput/>
                    <div className="foot">
                        <div className="f-cb loginbox">
                            <span className="u-loginbtn">登录</span>
                        </div>
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