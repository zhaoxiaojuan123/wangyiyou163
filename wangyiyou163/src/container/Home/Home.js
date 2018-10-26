import React from "react"
import './index.less'
import HomeHeader from "./HomeHeader"
import HomeSlider from "./HomeSlider"
import { connect } from "react-redux";
import actions from "../../store/action/home"
import HomeHeaderRoute from "./HomeHeaderRoute";

 class Home extends React.Component {
     componentDidMount(){
         this.props.getSlider();
     }
    render() {
        console.log(this.props.sliders);
        

        return <div className="Home">
        
            <HomeHeader></HomeHeader>
            {/* <HomeSlider sliders={this.props.sliders}></HomeSlider> */}
            <HomeHeaderRoute>
                {/* {this.props.children} */}
            </HomeHeaderRoute>
        </div>

    }
}
export default connect(state=>({...state.home}),actions)(Home)