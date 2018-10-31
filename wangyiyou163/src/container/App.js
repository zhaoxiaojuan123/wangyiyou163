import React from 'react';
import Nav from '../component/Nav/Nav'

export default class App extends React.Component {
    render() {
        return <div>
<<<<<<< HEAD
             {this.props.children}
            {!/#\/(personal|phonelogin|emaillogin|phonereg|emailreg|search)$/.test(window.location.hash)?<Nav></Nav>:null}

        </div>
=======
        {this.props.children}
             <Nav/>
             
            </div>
>>>>>>> 70e69dcb8327abe2677674f1f5377fa4d570994d

    }
}
