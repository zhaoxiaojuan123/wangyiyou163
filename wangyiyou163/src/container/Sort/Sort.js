import React from "react"
import './index.less'
import Search from "./Search";
import LeftNav from "./LeftNav";
import RightContent from "./RightContent";

export default class Sort extends React.Component {
    render() {
        return <div className="sort">
            <Search/>
            <LeftNav/>
            <RightContent/>
        </div>

    }
}