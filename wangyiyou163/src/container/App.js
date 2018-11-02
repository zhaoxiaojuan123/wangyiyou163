import React from 'react';
import Nav from '../component/Nav/Nav'

export default class App extends React.Component {
    render() {
        return <div>
             {this.props.children}
        {!/#\/(personal|phonelogin|emaillogin|phonereg)$/.test(window.location.hash)?<Nav></Nav>:null}
        {!/#\/(personal|phonelogin|emaillogin|phonereg|emailreg)$/.test(window.location.hash)?<Nav></Nav>:null}
            <Nav />
            {this.props.children}
        </div>
             {this.props.children}
            {!/#\/(personal|phonelogin|emaillogin|phonereg|emailreg|search)$/.test(window.location.hash)?<Nav></Nav>:null}
        </div>
        {this.props.children}
             <Nav/>
            </div>
        }
    }

}
