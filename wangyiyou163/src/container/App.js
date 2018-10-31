import React from "react"
import Nav from '../component/Nav/Nav'

export default class App extends React.Component {
    render() {

        return <div>
             
             {this.props.children}
             
<<<<<<< HEAD
             {!/#\/(personal|phonelogin|emaillogin|phonereg)$/.test(window.location.hash)?<Nav></Nav>:null}
=======
             {!/#\/(personal|phonelogin|emaillogin|phonereg|emailreg)$/.test(window.location.hash)?<Nav></Nav>:null}
>>>>>>> 第一次提交
             
            </div>

        }
}
