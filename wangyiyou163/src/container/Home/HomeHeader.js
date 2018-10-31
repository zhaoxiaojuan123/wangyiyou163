import React from "react"
import { NavLink } from "react-router-dom"
export default class HomeHeader extends React.Component {
    render() {
        return <div className="HomeHeader">
            <div className="line">
                <a className="logo" href="/"></a>
                <div className="topSearchIpt">
                    <div className="place">
                        <i className="iconfont icon-sousuo"></i>
                        <span className="placeholder">搜索商品，共16955款好物</span>
                    </div>

                </div>
            </div>
            <div className="tabs">
                <div className="list">
                    <NavLink to={'/home/recommend'}>
                        <div className="tab">
                            <span className="txt current">
                                推荐
                        </span>
                        </div>
                    </NavLink>
                    <NavLink to={'/home/live'}>
                        <div className="tab">
                            <span className="txt">
                                居家
                        </span>
                        </div>
                    </NavLink>
                    <NavLink to={'/home/shoes'}>
                        <div className="tab">
                            <span className="txt">
                                鞋包配饰
                        </span>
                        </div>
                    </NavLink>
                    <NavLink to={'/home/clothes'}>
                        <div className="tab">
                            <span className="txt">
                                服装
                        </span>
                        </div>

                    </NavLink>

                    <NavLink to={'/home/appliance'}>
                        <div className="tab">
                            <span className="txt">
                                电器
                        </span>
                        </div>
                    </NavLink>
                    <NavLink to={'/home/wash'}>
                        <div className="tab">
                            <span className="txt">
                                洗护
                        </span>
                        </div>
                    </NavLink>
                    <NavLink to={'/home/food'}>
                        <div className="tab">
                            <span className="txt">
                                饮食
                        </span>
                        </div>
                    </NavLink>
                    <NavLink to={'/home/kitchen'}>
                        <div className="tab">
                            <span className="txt">
                                餐厨
                        </span>
                        </div>
                    </NavLink>
                    <NavLink to={'/home/body'}>
                        <div className="tab">
                            <span className="txt">
                                婴童
                        </span>
                        </div>
                    </NavLink>
                    <NavLink to={'/home/style'}>
                        <div className="tab">
                            <span className="txt">
                                文体
                        </span>
                        </div>
                    </NavLink>
                    <NavLink to={'/home/feature'}>
                        <div className="tab">
                            <span className="txt">
                                特色区
                        </span>
                        </div>
                    </NavLink>
                </div>
            </div>
           
        </div>
    }

}