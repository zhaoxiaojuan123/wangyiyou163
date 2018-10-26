import React from "react";
import "./index.less";
import {NavLink} from "react-router-dom";
export default class BackHeader extends React.Component{
    render(){
        return <div className="header">
            <div className="row">
                <NavLink to="/">
                    <i className="iconfont icon-shouye"></i>
                </NavLink>
                <NavLink to="/">
                    <i className="logo u-icon u-icon-logo">
                        
                    </i>
                </NavLink>
                <div className="right">
                    <NavLink to="/search">
                        <i className="iconfont icon-sousuo"></i>
                    </NavLink>
                    <NavLink to="/cart">
                        <i className="iconfont icon-gouwuche"></i>
                    </NavLink>
                </div>
                
            </div>
        </div>
    }
}
