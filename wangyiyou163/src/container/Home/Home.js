import React from "react"
import './index.less'
import HomeHeader from "./HomeHeader"
import HomeHeaderRoute from "./HomeHeaderRoute";

export default class Home extends React.Component {
    
    render() {
        return <div className="Home">
        
            <HomeHeader></HomeHeader>
            <HomeHeaderRoute/>
          
        </div>

    }
}
