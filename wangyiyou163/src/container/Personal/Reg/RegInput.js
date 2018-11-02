import React from "react";
import './index.less';
export default class RegInput extends React.Component{

    handleReg=()=>{
        let username=this.username.value;
        let password=this.password.value;
        this.props.reg({username,password});
    }
    render(){
        return <div className="inputbox">
            <div className="u-input">
                <input type="text" placeholder="请输入手机号"></input>

                <input type="text" placeholder="请输入短信验证码">
                
                </input>
                <div className="pcbtn f-f1">
                    <a href="" className="tabfocus getsmscode">获取验证码</a>
                </div>

                <input type="text" placeholder="请输入密码"  ref={x=>{this.password=x}}>
                
                </input>
                <div className="f-cb loginbox">
                    <a className="u-loginbtn" onClick={this.handleReg}>注册</a>
                </div>
            </div>
            <div className="fur-item fur-agree">  
                <span className="check">
                    <input type="checkbox"/>
                </span>  
                    
                    我同意
                    <a href="//reg.163.com/agreement_mobile.shtml">《服务条款》</a>
                    和 
                    <a href="//reg.163.com/agreement_mobile_ysbh.shtml">《网易隐私政策》</a>
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
