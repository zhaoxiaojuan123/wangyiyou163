import React from "react"
import './index.less'
let img1 = require('./images/chufang.jpg')
let imgt2 = require("./images/touxiang1.png")
let imgt3 = require("./images/touxiang2.png")
let imgyou = require("./images/youtu1.jpg")
let imgyou2 = require("./images/youtu2.jpg")

export default class Tui2 extends React.Component {

    render() {

        return <div className="container2">
            <div className="chufang">
                <a className="chufang-a">
                    <div className="chufang-img">
                        <img src={img1} />
                        <div className="topicTag">严选推荐</div>
                    </div>
                    <div className="topicInfo">
                        <div className="line1">
                            <div className="line1-title"><span>严选新中式厨房</span><span className="price">7.9元起</span></div>
                        </div>
                        <div className="line2">百款餐厨好货，打造梦想厨房</div>
                    </div>
                </a>

            </div>
           
            <a className="chufang-a2">
                <div className="zuotu-content">
                    <div className="zuowen"><i><img src={imgt2} /></i><span>丁磊</span></div>
                    <p className="title-p1">仿人手按摩肩带，拯救多年颈椎病</p>
                    <p className="title-p2">按摩肩带限时8.6折。现在这个时代，没有颈椎病都不敢说自己是搞互联网的。我试过不少按摩仪，发现普遍有个问题就是：按得好的太贵，便宜的都按得太表面，总之不爽。严选特地去开发了这款按摩肩带，价格不贵，按的却很到位。</p>
                </div>
                <div className="youtu">
                    <img src={imgyou} />
                    <div className="topic">丁磊的好货推荐</div>
                </div>
            </a>
            
        
            <a className="chufang-a3">
                <div className="zuotu-content">
                    <div className="zuowen"><i><img src={imgt3} /></i><span>居家组：朵朵</span></div>
                    <p className="title-p1">除了云吸猫，还能这样拥有萌宠</p>
                    <p className="title-p2">准备好做动物园园长了吗！？</p>
                </div>
                <div className="youtu">
                    <img src={imgyou2} />
                    <div className="topic">挑款师推荐</div>
                </div>
            </a>
           
        </div>
    }
}