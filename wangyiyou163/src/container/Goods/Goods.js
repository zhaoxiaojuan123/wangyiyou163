import React from "react"
import './index.less'
import SwipeSlider from './SwipeSlider'
import Mslider from './Mslider'
import Tui1 from './Tui1'
import Tatle from './Tatle'
import Tab from './Tab'
import Pubu from './pubu'
export default class Goods extends React.Component {
    constructor() {
        super();
    }
    render() {
      
        return <div className="goods">
        <Tatle/>
        <Tab/>
        <SwipeSlider/> 
        <Mslider/>
        <Tui1/>    
        <Pubu/> 
        </div>
}
}