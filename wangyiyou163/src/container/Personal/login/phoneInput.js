import React from "react";
import './index.less';
import {NavLink} from "react-router-dom";
export default class PhoneInput extends React.Component{
    render(){
        return <div className="inputbox">
            <div className="u-input">
                <input type="text" placeholder="请输入手机号"></input>
                <input type="text" placeholder="请输入短信验证码">
                
                </input>
                <div className="pcbtn f-f1">
                    <a href="" className="tabfocus getsmscode">获取验证码</a>
                </div>
                <div className="m-unlogin">
                    <a className="forgetpwdReg" data-outlink="1" href="https://mob.163.com/web/helpcenter?from=webzj" target="_blank">遇到问题？</a>
                </div>
                <NavLink to="/loginsuccess">
                    <div className="f-cb loginbox">
                      <a className="u-loginbtn">登录</a>
                    </div>
                </NavLink>
                
            </div>
            
        </div>
    }
}