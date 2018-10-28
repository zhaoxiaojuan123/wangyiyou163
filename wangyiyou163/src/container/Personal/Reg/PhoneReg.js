import React from "react";
import './index.less';
import BackHeader from "../../../component/BackHeader/BackHeader";
import RegInput from "./RegInput";
export default class PhonelReg extends React.Component{
    render(){
        return <div className="reg">
            <BackHeader/>
            <div className="view">
                <div className="title">
                    <span>手机号注册</span>
                </div>
                <RegInput/>
                
                <div className="foot">
                <a href="https://zc.reg.163.com/m/regInitialized?pd=yanxuan&pkid=QyOtTGv&pkht=you.163.com&tp=2&as=3&curl=http%3A%2F%2Fm.you.163.com%2Fucenter">
                    <div className="btn btn-2">
                        <span>邮箱号注册</span>
                        <i className="iconfont icon-fanhui"></i>
                    </div>
                </a>
                    
                </div>
            </div>

        </div>
    }
}