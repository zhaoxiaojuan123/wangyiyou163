import React from "react"
import './tab.less'
export default class Tab extends React.Component {
    constructor() {
        super();
        
    }

    render() {
        return (
            <div className="tab">
                <div className="tab-main">
                    <a className="a1 active">推荐</a>
                    <a className="a1">达人</a>
                    <a className="a1">上新</a>
                    <a className="a1">晒单</a>
                    <a className="a1">生活HOME</a>
                </div>
            </div>
        )
    }
}