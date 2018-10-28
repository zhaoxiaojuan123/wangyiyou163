import React from "react"
import './index.less'
import SwipeSlider from './SwipeSlider'
import Mslider from './Mslider'
import Tui1 from './Tui1'
import Tatle from './Tatle'
export default class Goods extends React.Component {
    constructor() {
        super();
    }
    render() {
      
        return <div className="goods">
        <Tatle/>
        <SwipeSlider/> 
        <Mslider/>
        <Tui1/>     
        </div>
}
}