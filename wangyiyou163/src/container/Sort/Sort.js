import React from "react"
import './index.less'
import Search from "./Search";
import LeftNav from "./LeftNav";
import RightContent from "./RightContent";
import {connect} from 'react-redux';
import action from '../../store/actionsll'

class Sort extends React.Component {
    render() {
        console.log(this.props.type);
        return <div className="sort">
            <Search/>
            <LeftNav  changeTypes={this.props.changeType}/>
            <RightContent />
        </div>

    }
}
export default  connect(state=>({...state.sort}),action)(Sort)