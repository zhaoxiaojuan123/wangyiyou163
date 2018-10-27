import React from "react"
import HomeSlider from "./HomeSlider"
import HomeGrow from "./HomeGrow"
import { connect } from "react-redux";
import actions from "../../../store/action/home"
import "./index.less"
import HomeBoss from "./HomeBoss";
import HomeMenu from "./HomeMenu";
class Recommend extends React.Component {
    constructor() {
        super();
    }
    componentWillMount() {
        this.props.getSlider();
    }

    render() {
        // console.log(this.props.sliders,9999);   
        return <div className='recommend'>
            <div className="indexFloor">
            {this.props.sliders.length?<HomeSlider sliders={this.props.sliders}></HomeSlider>:null}
                <HomeGrow></HomeGrow>
                <HomeBoss></HomeBoss>
                <HomeMenu></HomeMenu>
                {/* {this.props.children} */}
            </div>
        </div>
    }
}
export default connect(state => ({ ...state.home }), actions)(Recommend)