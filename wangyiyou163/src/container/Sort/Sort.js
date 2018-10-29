import React from "react"
import './index.less'
import Search from "./Search";
import LeftNav from "./LeftNav";
import RightContent from "./RightContent";
import {connect} from 'react-redux';
import action from '../../store/actionsll'

class Sort extends React.Component {
    constructor(){
        super();
    }
    componentDidMount(){
        this.props.getImgs()
        this.props.getRightContent()
    }
    render() {
        //console.log(this.props.nav);
        //console.log(this.props.rightContent);
        return <div className="sort">
            <Search/>
            <LeftNav  nav={this.props.nav||[]}/>
            <RightContent />
        </div>

    }
}
export default  connect(state=>({...state.sort}),action)(Sort)