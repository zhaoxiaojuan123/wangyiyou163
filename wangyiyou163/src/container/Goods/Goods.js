import React from "react"
import './index.less'
import SwipeSlider from './SwipeSlider'


export default class Goods extends React.Component {
    constructor() {
        super();
    }
    render() {
      
        return <div className="goods">
        <SwipeSlider/>
        </div>
}
}