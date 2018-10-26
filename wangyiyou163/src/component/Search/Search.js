import React from "react"
import './index.less'
import {NavLink} from 'react-router-dom'
export default class Nav extends React.Component {
    render() {
        return <div className="search-box">
            <div className="up">
                <div className="search" >
                    <div className="box">
                        <i className="icon icon-sousuo"></i>
                        <input type="text" placeholder="保暖必备 Nine West制造商长靴上新"/>
                    </div>
                    <span className="cancel">取消</span>
                   </div>
            </div>
            <div>
            </div>
            <div className="down">
                <div className="searchview">
                    <div className="top">
                        <span>热门搜索</span>
                    </div>
                </div>
            </div>
        </div>

    }
}