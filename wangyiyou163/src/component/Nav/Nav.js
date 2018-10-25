import React from "react"
import './index.less'
import {NavLink} from 'react-router-dom'
export default class Nav extends React.Component {
    render() {

        return <div className="footer">
            <NavLink to={'/'}>
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