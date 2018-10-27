import React from "react"
import './index.less'
import {NavLink} from "react-router-dom";
export default class Cart extends React.Component {
    constructor(){
        super();
    }
    render() {
        return <div className="m-mainView">
            <div className="m-hd">
                <div className="m-cartHd">
                    <span className="logo">购物车</span>
                    <div className="right" >
                        <a className="cart-coupon">
                            <span className="txt">领券</span>
                        </a>    
                    </div>        
                </div>
                <div>
                    <ul className="m-servicePolicy">
                        <li className="item">
                            <i className="iconfont icon-yuanquan"></i>
                            <span>30天无忧退货</span>
                        </li>
                        <li className="item">
                            <i className="iconfont icon-yuanquan" ></i>
                            <span>48小时快速退款</span>
                        </li>
                        <li className="item">
                            <i className="iconfont icon-yuanquan" ></i>
                            <span>满88元免邮</span>
                        </li>
                    </ul>
                </div>
                <div className="container">
                    <div className="img"></div>
                    <div className="txt">
                        <div className="noCart-login">
                            <div className="noCart-title">去添加点什么吧</div>
                            <NavLink to="/personal">
                                <div className="noCart-btn">登录</div>
                            </NavLink>
                        
                        </div>
                    </div>
                </div>
            </div>   
           
        </div>

    }
}