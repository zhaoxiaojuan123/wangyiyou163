import React from "react"
import './index.less'
import ReactSwipe from 'react-swipe';
let img1=require('./images/chufang.jpg')
let imgt2=require("./images/touxiang1.png")
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
        </div>
}
}