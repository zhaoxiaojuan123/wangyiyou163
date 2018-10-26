import React from "react"
import './index.less'
import BackHeader from "../../component/BackHeader/BackHeader";
import {NavLink} from "react-router-dom";
export default class Personal extends React.Component {
    constructor(){
        super();
    }
    render() {

        return <div className="m-loginTypes">
            <BackHeader/>
            <div className="cont">
                <div className="logoWrap">
                    <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png"/>
                </div>
                <div className="btnWrap">
                    <NavLink to="/phonelogin">
                        <div className="w-button w-button-xl w-button-block">
                            <i className="iconfont icon-shouji"></i>
                            <span>手机号码登录</span>
                        </div>
                    </NavLink>
                    <NavLink to="/emaillogin">
                        <div className="w-button w-button-xl w-button-block w-button-ghostRed">
                            <i className="iconfont icon-youxiang"></i>
                            <span>邮箱帐号登录</span>
                        </div>
                    </NavLink>
                    <NavLink to="/phonereg">
                        <div className="btn">
                            <span>手机号快捷注册</span>
                            <i className="iconfont icon-fanhui"></i>
                        </div>
                    </NavLink>
                    
                </div>
            </div>
            <div className="thirdWrap">
                <div className="itemWrap">
                    <span className="item">
                        <i className="iconfont icon-weixin"></i>
                        <span className="name">微信</span>
                    </span>
                </div>
                <div className="itemWrap qq">
                    <span className="item">
                        <i className="iconfont icon-qq"></i>
                        <span className="name">QQ</span>
                    </span>
                </div>
                <div className="itemWrap">
                    <span className="item">
                        <i className="iconfont icon-weibo"></i>
                        <span className="name">微博</span>
                    </span>
                </div>
           
           </div>
        </div>

        }
}