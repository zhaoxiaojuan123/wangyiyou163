import React from "react"
import './index.less'

let img1 = require('./images/chufang.jpg')
let img2 = require('./images/meizi.jpg')
let imgt2 = require("./images/touxiang1.png")
let imgt3 = require("./images/touxiang2.png")
let imgt4 = require("./images/touxiang3.png")
let imgt5 = require("./images/touxiang4.jpg")
let imgyou = require("./images/youtu1.jpg")
let imgyou2 = require("./images/youtu2.jpg")
let imgyou3 = require("./images/youtu3.jpg")
let imgyou4 = require("./images/youtu4.jpg")

export default class Tui1 extends React.Component {

    render() {

        return <div className="container">
            <div className="tuijian ">
                为你推荐
         </div>
            <div className="chufang">
                <a className="chufang-a">
                    <div className="chufang-img">
                        <img src={img2} />
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
           <div className="content-a">
            <a className="chufang-a2">
                <div className="zuotu-content">
                    <div className="zuowen"><i><img src={imgt2} /></i><span>丁磊</span></div>
                    <p className="title-p1">仿人手按摩肩带，拯救多年颈椎病</p>
                    <p className="title-p2">按摩肩带限时8.6折。现在这个时代，没有颈椎病都不敢说自己是搞互联网的。我试过不少按摩仪，发现普遍有个问题就是：按得好的太贵，便宜的都按得太表面，总之不爽。严选特地去开发了这款按摩肩带，价格不贵，按的却很到位。</p>
                </div>
                <div className="youtu">
                    <img src={imgyou} />
                </div>
            </a>
            </div>
            <div className="content-a">
            <a className="chufang-a3">
                <div className="zuotu-content">
                    <div className="zuowen"><i><img src={imgt3} /></i><span>居家组：朵朵</span></div>
                    <p className="title-p1">除了云吸猫，还能这样拥有萌宠</p>
                    <p className="title-p2">准备好做动物园园长了吗！？</p>
                </div>
                <div className="youtu">
                    <img src={imgyou2} />
                </div>
            </a>
            </div>
           {/* ----- */}
           <div className="chufang1">
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
            <div className="content-a">
            <a className="chufang-a4">
                <div className="zuotu-content">
                    <div className="zuowen"><i><img src={imgt4} /></i><span>丁磊</span></div>
                    <p className="title-p1">梦幻星云酥，颜值实力双料担当</p>
                    <p className="title-p2">按摩肩带限时8.酥饼界的小仙女</p>
                </div>
                <div className="youtu">
                    <img src={imgyou3} />
                </div>
            </a>
            </div>
            <div className="content-a">
            <a className="chufang-a5">
                <div className="zuotu-content">
                    <div className="zuowen"><i><img src={imgt5} /></i><span>居家组：朵朵</span></div>
                    <p className="title-p1">今年女鞋更好穿的秘密</p>
                    <p className="title-p2">各位小仙女在网上买鞋时，一定会有这样的经历吧：有些鞋子样子好看，但买回去却硬到磨...</p>
                </div>
                <div className="youtu">
                    <img src={imgyou4} />
                </div>
            </a>
            </div>
        </div>
    }
}