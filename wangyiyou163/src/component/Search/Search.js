import React from "react"
import './index.less'
import {NavLink} from 'react-router-dom'
export default class Nav extends React.Component {
    render() {
        return <div className="big">
            <div className="search-box">
                <div className="up">
                    <div className="search" >
                        <div className="box">
                            <i className="iconfont icon-sousuo"></i>
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
                        <div className="list">
                            <a href="" className="lighhight">秋冬加厚羽绒被8折</a>
                            <a href="">锅</a>
                            <a href="">棉拖鞋</a>
                            <a href="">苹果手机配件</a>
                            <a href="">保温杯</a>
                            <a href="" className="lighhight">抖音足贴</a>
                            <a href="" className="lighhight">秋冬女鞋</a>
                            <a href="" className="lighhight">行李箱</a>
                        </div>
                    </div>
                </div>
            </div>
            </div>


    }
}