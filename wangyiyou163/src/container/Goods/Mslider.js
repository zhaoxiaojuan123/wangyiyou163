import React from "react"
import './index.less'
let img1=require('./images/chufang.jpg')
let imgt2=require("./images/touxiang1.png")
export default class Mslider extends React.Component {

    render() {
        return <div className="mslider-content">
            <div className="mslider-box">
                <div className="fl">
                    <a className="mslider-a">
                        <div className="mslider-img1"></div>
                        <div className="mslider-text">360篇文章</div>
                        <p className="title">严选推荐</p>
                    </a>
                </div>
                <div className="fl">
                    <a className="mslider-a">
                        <div className="mslider-img2"></div>
                        <div className="mslider-text">112篇文章</div>
                        <p className="title">丁磊好货推荐</p>
                    </a>
                </div>
                <div className="fl">
                    <a className="mslider-a">
                        <div className="mslider-img3"></div>
                        <div className="mslider-text">217篇文章</div>
                        <p className="title">挑款师推荐</p>
                    </a>
                </div>
                <div className="fl">
                    <a className="mslider-a">
                        <div className="mslider-img4"></div>
                        <div className="mslider-text">222篇文章</div>
                        <p className="title">甄选家</p>
                    </a>
                </div>
                <div className="fl">
                    <a className="mslider-a">
                        <div className="mslider-img5"></div>
                        <div className="mslider-text">30篇文章</div>
                        <p className="title">新品放映室</p>
                    </a>
                </div>
                <div className="fl">
                    <a className="mslider-a">
                        <div className="mslider-img6"></div>
                        <div className="mslider-text">3篇文章</div>
                        <p className="title">严选HOME</p>
                    </a>
                </div>
                <div className="fl">
                    <a className="mslider-a">
                        <div className="mslider-img7"></div>
                        <div className="mslider-text">1860篇文章</div>
                        <p className="title">严选LOOK</p>
                    </a>
                </div>
                <div className="fl">
                    <a className="mslider-a">
                        <div className="mslider-img8"></div>
                        <div className="mslider-text">15篇文章</div>
                        <p className="title">口碑商品</p>
                    </a>
                </div>
                <div className="fl">
                    <a className="mslider-a">
                        <div className="mslider-img9"></div>
                        <div className="mslider-text">3篇文章</div>
                        <p className="title">特色系列</p>
                    </a>
                </div>
            </div>
        </div>
    }
}