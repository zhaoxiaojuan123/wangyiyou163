import React from "react";
import './index.less';
import BackHeader from "../../../component/BackHeader/BackHeader";
import {NavLink} from "react-router-dom";
export default class PhonelReg extends React.Component{
    render(){
        return <div className="reg">
            <BackHeader/>
            <div className="view">
                <div className="title">
                    <span>手机号注册</span>
                </div>
                <div className="ursBox ursBox-3">
                    
                </div>
                <div className="foot">
                    <NavLink to="/emailreg">
                        <div className="btn btn-2">
                            <span>邮箱号注册</span>
                            <i className="iconfont icon-fanhui"></i>
                        </div>
                    </NavLink>
                    
                </div>
            </div>

        </div>
    }
}