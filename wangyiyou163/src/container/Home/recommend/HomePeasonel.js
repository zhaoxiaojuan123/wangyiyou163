import React from "react"

import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import actions from "../../../store/action/home"
import { connect } from "react-redux";


class HomePersonal extends React.Component {
    componentDidMount() {
        this.props.getPersonalSlider();
        var mySwiper = new Swiper('.swiper-container', {
            autoplay: false,
            pagination: {
                el: '.swiper-pagination',
            }
        })
    }

    render() {
        console.log(this.props.personals)
        return <div className="HomePersonal">
            <div className="moduleTitle">
                <div className="left">
                    <span>私人订制</span>
                </div>
            </div>
            <div className="personalswiper">
                <div className="swiper-container">
                    <div className="swiper-wrapper">


                    {this.props.personals.map((item,index)=>{
                        <div className="swiper-slide" key={index}>
                        {item.map((k,m)=>{
                        return  <div className="swiper-content" key={m}>
                        <div className="swiperimg">
                        <img src={k.url} alt={k.url}/>
                        </div>
                        <div className="swiperfooter">
                            <span className="swipertitle">{k.title}</span>
                            <span className="swiperprice">￥{k.price}</span>
                        </div>
                    </div>   
                        })}
                    </div>
                    })}  
                    </div>
                </div>

            </div>
            <div className="swiper-pagination">

            </div>
        </div>
    }
}
export default connect(state => ({ ...state.home }),actions)(HomePersonal)