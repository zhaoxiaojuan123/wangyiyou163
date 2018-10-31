import React from "react"
import './index.less'
<<<<<<< HEAD
import {NavLink,Link} from 'react-router-dom'
=======
import { NavLink } from 'react-router-dom'
>>>>>>> b88e3bf1c141bb52d8a39cd61f485401231e9ad3
export default class Nav extends React.Component {
    render() {

        return <div className="footer">
            <NavLink to={'/home/recommend'}>
                <i className="iconfont icon-shouye"></i>
                <span>首页</span>
            </NavLink>
            <NavLink to={'/goods'}>
                <i className="iconfont icon-shiwu"></i>
                <span>识物</span>
            </NavLink>
            <NavLink to={'/sort'}>
                <i className="iconfont icon-iconyihuifu-"></i>
                <span>分类</span>
            </NavLink>
            <NavLink to={'/cart'}>
                <i className="iconfont icon-gouwuche"></i>
                <span>购物车</span>
            </NavLink>
            <NavLink to={'/personal'}>
                <i className="iconfont icon-geren"></i>
                <span>个人</span>
            </NavLink>
        </div>

    }
}