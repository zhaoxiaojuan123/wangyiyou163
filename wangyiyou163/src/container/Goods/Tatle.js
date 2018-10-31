import React from "react"
import './tatle.less'
export default class Tatle extends React.Component {

    render() {
        return (
            <div className="tatle">
                <div className="tatle-main">
                    <div className="iconfont icon-shouye bk-home"></div>
                    <div className="head-tab">
                        <a className="item-active">发现</a>
                        <a className="item-zhen">甄选家</a>
                    </div>
                    <div className="head-sc">
                        <a className="iconfont icon-sousuo link-sousuo"></a>
                        <a className="iconfont icon-gouwuche link-cart"></a>
                    </div>
                </div>
            </div>
        )
    }
}