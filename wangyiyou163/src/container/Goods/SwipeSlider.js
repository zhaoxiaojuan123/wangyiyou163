import React from "react"
import './index.less'
import ReactSwipe from 'react-swipe';
let img1=require('./images/chufang.jpg')

export default class Goods extends React.Component {
    constructor() {
        super();
        this.state = { index: 0 ,imgs:[require("./images/pic1.jpg"),require("./images/pic12.png"),require("./images/pic13.jpg"),require("./images/pic14.jpg")]}
    }
    render() {
        let option = {
            continuous: true,
            auto: 1000,
            callback: (index) => {
                this.setState({ index })
            }
        }
        return <div className="main">
           <div className="home-swipe">
         <ReactSwipe className="carousel" swipeOptions={option}>
               <a className="swipe-img"><img src={this.state.imgs[0]}/></a>
               <a className="swipe-img"><img src={this.state.imgs[1]}/></a>
               <a className="swipe-img"><img src={this.state.imgs[2]}/></a>
               <a className="swipe-img"><img src={this.state.imgs[3]}/></a>
            </ReactSwipe>
           
        </div>
        <div className="mslider-content">
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
        <div className="container">
         <div className="tuijian ">
            为你推荐
         </div>
         <div className="chufang">
           <a className="chufang-a">
            <div className="chufang-img">
            <img src={img1}/> 
            <div className="topicTag">严选推荐</div>
            </div>
            <div className="topicInfo">
            <div className="line1">
                <div className="line1-title">严选新中式厨房</div>
                <div className="price">7.9元起</div>
            </div>
            </div>
           </a>
         </div>

        </div>
        </div>
}
}