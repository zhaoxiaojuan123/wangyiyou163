import React from "react"
import HomeSlider from "./HomeSlider"
import HomeGrow from "./HomeGrow"
import { connect } from "react-redux";
import actions from "../../../store/action/home"
import "./index.less"
class Recommend extends React.Component {
    constructor() {
        super();
    }
    componentDidMount() {
        this.props.getSlider();
    }

    render() {
        // console.log(this.props.sliders,9999);   
        return <div className='recommend'>
            <div className="indexFloor">
                <HomeSlider sliders={this.props.sliders}></HomeSlider>
                <HomeGrow></HomeGrow>
            </div>
        </div>
    }
}
export default connect(state => ({ ...state.home }), actions)(Recommend)