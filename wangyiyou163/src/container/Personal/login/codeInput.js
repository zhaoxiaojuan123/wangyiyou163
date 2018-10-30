import React from "react";
import './index.less';
export default class CodeInput extends React.Component{
    render(){
        return <div className="inputbox">
            <div className="u-input">
                <input type="text" placeholder="请输入手机号"></input>
                <input type="text" placeholder="请输入密码"></input>
                <div className="m-unlogin">
                    <a className="forgetpwdReg" href="https://mob.163.com/web/passwdfind" target="_blank">忘记密码？</a>

                    
                </div>
                
            </div>
            
        </div>
    }
}