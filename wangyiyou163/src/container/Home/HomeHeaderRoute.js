import React from "react"
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import Recommend from "./recommend/recommend";
import Live from "./live/live";
import Shoes from "./shoes/shoes";
import Clothes from "./clothes/clothes";
import Applicance from "./appliance/appliance";
import Wash from "./wash/wash";
import Food from "./food/food";
import Kitchen from "./kitchen/kitchen";
import Body from "./boby/boby";
import Style from "./style/style";
import Feature from "./feature/feature";

export default class HomeHeaderRoute extends React.Component {
    render() {
        return <div className='aaa'>
            <Route path="/home/" exact={true} component={Recommend}></Route>
            <Route path="/home/recommend" component={Recommend}></Route>
            <Route path="/home/live" component={Live}></Route>
            <Route path="/home/shoes" component={Shoes}></Route>
            <Route path="/home/clothes" component={Clothes}></Route>
            <Route path="/home/appliance" component={Applicance}></Route>
            <Route path="/home/wash" component={Wash}></Route>
            <Route path="/home/food" component={Food}></Route>
            <Route path="/home/kitchen" component={Kitchen}></Route>
            <Route path="/home/boby" component={Body}></Route>
            <Route path="/home/style" component={Style}></Route>
            <Route path="/home/feature" component={Feature}></Route>
        </div>
    }
}
