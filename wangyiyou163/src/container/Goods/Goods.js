import React from "react"
import './index.less'
import SwipeSlider from './SwipeSlider'
import Mslider from './Mslider'
import Tui1 from './Tui1'
import Tatle from './Tatle'
import Tab from './Tab'
import Pubu from './pubu'
import {connect} from "react-redux"
import {loadMore,downRefresh} from '../../../utils'
import actions from '../../store/actions-zxj'
 class Goods extends React.Component {
    constructor() {
        super();
    }
    componentDidMount(){ //wode
        this.props.getPuBu()
        loadMore(this.content,this.props.getPuBu)
        downRefresh(this.content,this.props.getPuBu)
      
    }
    render() {
       
        return <div className="goods">
        <Tatle/>
        <Tab/>
       
        <SwipeSlider/> 
        <Mslider/>
        <Tui1/>    
        <div className="main-content" ref={(x)=>{this.content=x}}>
        <Pubu ary={this.props.ary}/> 
        </div>
        <div className='clear'></div>
        </div>
}
}
export default connect(state=>({...state.puboo}),actions)(Goods)