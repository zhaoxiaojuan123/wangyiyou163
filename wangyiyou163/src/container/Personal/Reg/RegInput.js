import React from "react";
import './index.less';
export default class RegInput extends React.Component{
    render(){
        return <div className="inputbox">
            <div className="u-input">
                <input type="text" placeholder="请输入手机号"></input>
                <input type="text" placeholder="请输入短信验证码">
                
                </input>
                <div className="pcbtn f-f1">
                    <a href="" className="tabfocus getsmscode">获取验证码</a>
                </div>
                <input type="text" placeholder="请输入密码">
                
                </input>
                <div className="f-cb loginbox">
                    <a className="u-loginbtn">注册</a>
                </div>
                
            </div>
            
        </div>
    }
}