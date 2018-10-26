import React from "react"
import ReactDOM from "react-dom"
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import Home from './container/Home/Home'
import Goods from './container/Goods/Goods'
import Sort from './container/Sort/Sort'
import Cart from './container/Cart/Cart'
import Personal from './container/Personal/Personal'
import App from './container/App'
import store from '../src/store/index'
import { Provider } from "react-redux"
import Search from './component/Search/Search'
import Recommend from "./container/Home/recommend/recommend";

ReactDOM.render(
<Router>
    <Provider store={store}>
        <App>
            <Route path='/' exact={true} component={Home} />
            <Route path='/home'   component={Home} />
            <Route path='/goods' component={Goods} />
            <Route path='/sort' component={Sort} />
            <Route path='/cart' component={Cart} />
            <Route path='/personal' component={Personal} />
            <Route path='/search' component={Search} />
            <Route path='/home/recommend'  component={Home}/>
            {/* <Redirect to="/home"/> */}
        </App>
    </Provider>
</Router>, window.root)