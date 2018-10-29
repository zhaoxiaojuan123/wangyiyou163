import React from "react"
import HomeSlider from "./HomeSlider"
import HomeGrow from "./HomeGrow"
import { connect } from "react-redux";
import actions from "../../../store/action/home"
import "./index.less"
import HomeBoss from "./HomeBoss";
import HomeMenu from "./HomeMenu";
import HomePersonal from "./HomePeasonel";
import HomeflashSaleModule from "./HomeflashSaleModule";
class Recommend extends React.Component {
    constructor() {
        super();
    }
    componentWillMount() {
        this.props.getSlider();
        this.props.getPersonalSlider();
    }

    render() {
        // console.log(this.props.sliders,9999);   
        // console.log(this.props.personals)
        return <div className='recommend'>
            <div className="indexFloor">
            {this.props.sliders.length?<HomeSlider sliders={this.props.sliders}></HomeSlider>:null}
                <HomeGrow></HomeGrow>
                <HomeBoss></HomeBoss>
                <HomeMenu></HomeMenu>
                <HomePersonal></HomePersonal>
                <HomeflashSaleModule></HomeflashSaleModule>
            </div>
        </div>
    }
}
export default connect(state => ({ ...state.home }), actions)(Recommend)