import React from "react";
import './index.less';
import {NavLink} from "react-router-dom";
export default class EmailInput extends React.Component{
    render(){
        return <div className="inputbox">
            <div className="u-input">
                <input type="text" placeholder="邮箱账号"></input>
                <input type="text" placeholder="密码"></input>
                <div className="m-unlogin">
                    <NavLink to="/phonereg">
                        <span className="">
                        注册账号
                        </span>
                    </NavLink>
                    <a className="forget" href="//reg.163.com/resetpwd/index.do">
                        忘记密码
                    </a> 
                </div>
               
                <div className="f-cb loginbox">
                    <a className="u-loginbtn">登录</a>
                </div>
            </div>
            
        </div>
    }
}