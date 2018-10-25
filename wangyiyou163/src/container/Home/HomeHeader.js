import React from "react"
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
                    <div className="tab">
                        <span className="txt current">
                            推荐
                        </span>
                    </div>
                    <div className="tab">
                        <span className="txt">
                            居家
                        </span>
                    </div>
                    <div className="tab">
                        <span className="txt">
                            鞋包配饰
                        </span>
                    </div>
                    <div className="tab">
                        <span className="txt">
                            服装
                        </span>
                    </div>
                    <div className="tab">
                        <span className="txt">
                            电器
                        </span>
                    </div>
                    <div className="tab">
                        <span className="txt">
                            洗护
                        </span>
                    </div>
                    <div className="tab">
                        <span className="txt">
                            饮食
                        </span>
                    </div>
                    <div className="tab">
                        <span className="txt">
                            餐厨
                        </span>
                    </div>
                    <div className="tab">
                        <span className="txt">
                            婴童
                        </span>
                    </div>
                    <div className="tab">
                        <span className="txt">
                            文体
                        </span>
                    </div>
                    <div className="tab">
                        <span className="txt">
                            特色区
                        </span>
                    </div>
                </div>


            </div>

        </div>
    }

}