import React from "react"
import ReactSwipe from "react-swipe"
export default class HomeSlider extends React.Component{
    render(){
        let option = {
            continuous: true,
            auto: 2000,
            // callback: (index) => { this.setState({ index }) }

        }
        return <div className="home-swipe">
        <ReactSwipe className="carousel" swipeOptions={option} key={this.props.lenght}>
        {this.props.sliders.map((item,index)=>{
            return <div key={index}>
                 <img src={item} alt={item}/>
            </div>
        })}
        
        </ReactSwipe>

        </div>
    }
}