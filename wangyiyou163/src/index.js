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
import PhonelLogin from "./container/Personal/login/PhoneLogin";
import EmailLogin from "./container/Personal/login/EmailLogin";
import PhonelReg from "./container/Personal/Reg/PhoneReg";

import Loginsuccess from "./container/Personal/login/loginsuccess";
import CodeLogin from "./container/Personal/login/codelogin";




ReactDOM.render(
<Router>
    <Provider store={store}>
        <App>
            <Switch>
            {/* <Route path='/' exact={true} component={Home} /> */}
            <Route path='/home'   component={Home} />
            <Route path='/goods' component={Goods} />
            <Route path='/sort' component={Sort} />
            <Route path='/cart' component={Cart} />
            <Route path='/search' component={Search} />
            <Route path='/personal' component={Personal} />
            <Route path='/phonelogin' component={PhonelLogin}/>
            <Route path='/codelogin' component={CodeLogin}/>
            <Route path='/emaillogin' component={EmailLogin}/>
            <Route path="/loginsuccess" component={Loginsuccess}></Route>
            <Route path='/phonereg' component={PhonelReg}/>
            {/* <Route path='/emailreg' component={EmailReg}/> */}
            {/* <Route path='/search' component={Search} /> */}
            <Route path='/home/recommend' exact={true} component={Home}/>
            {/* <Redirect to="/home"/> */}
            </Switch>
            
        </App>
        
    </Provider>

    
</Router>, window.root)

