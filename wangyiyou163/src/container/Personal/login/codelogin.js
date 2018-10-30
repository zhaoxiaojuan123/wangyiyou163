import React from "react";
import './index.less';
import BackHeader from "../../../component/BackHeader/BackHeader";
import {NavLink} from "react-router-dom";
import CodeInput from "./codeInput";
export default class CodeLogin extends React.Component{
    render(){
        return <div className="login">
            <BackHeader/>
            <div className="loginWrap loginWrap-1">
                <div className="view">
                    <div className="logo">
                        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png"></img>
                    </div>
                   
                    <CodeInput/>
                    <NavLink to="/phonelogin">
                        <div className="u-tab f-cb">
                            <span>使用短信验证登录</span>
                        </div>
                    </NavLink>
                    

                    <div className="foot">
                        <NavLink to="/loginsuccess">
                            <div className="f-cb loginbox">
                                <span className="u-loginbtn">登录</span>
                            </div>
                        </NavLink>

                        <NavLink to="/personal">
                            <div className="w-button w-button-xl w-button-block w-button-ghostRed">
                                <span>其他登录方式</span>
                            </div>
                        </NavLink>
                        <NavLink to="/phonereg">
                            <div className="btn btn-1">
                                <span>注册账号</span>
                                <i className="iconfont icon-fanhui"></i>
                            </div>
                        </NavLink>          
                    </div>
                </div>
            </div>

        </div>
    }
}