import React from "react"
import "./load.less" // wode
export default class Loading extends React.Component{
    render(){
        return <div className="Loading-slider">
            <div className='loader loader--snake'></div>
        </div>
    }
}