import React from "react"
import Nav from '../component/Nav/Nav'

export default class App extends React.Component {
    render() {

        return <div>

             {this.props.children}
            {!/#\/(personal|phonelogin|emaillogin|phonereg|emailreg|search)$/.test(window.location.hash)?<Nav></Nav>:null}

        </div>

    }
}
