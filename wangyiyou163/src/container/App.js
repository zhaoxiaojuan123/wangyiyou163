import React from 'react';
import Nav from '../component/Nav/Nav'

export default class App extends React.Component {
    render() {
        return <div>
<<<<<<< HEAD
             
             {this.props.children}
             
<<<<<<< HEAD
             {!/#\/(personal|phonelogin|emaillogin|phonereg)$/.test(window.location.hash)?<Nav></Nav>:null}
=======
             {!/#\/(personal|phonelogin|emaillogin|phonereg|emailreg)$/.test(window.location.hash)?<Nav></Nav>:null}
>>>>>>> 第一次提交
=======
<<<<<<< HEAD
            <Nav />
            {this.props.children}
        </div>
=======
<<<<<<< HEAD
             {this.props.children}
            {!/#\/(personal|phonelogin|emaillogin|phonereg|emailreg|search)$/.test(window.location.hash)?<Nav></Nav>:null}

        </div>
=======
        {this.props.children}
             <Nav/>
>>>>>>> b88e3bf1c141bb52d8a39cd61f485401231e9ad3
             
            </div>
>>>>>>> 70e69dcb8327abe2677674f1f5377fa4d570994d
>>>>>>> cde8079415859dcb0088d8131cac1a6e7688179c

<<<<<<< HEAD
        }
=======
    }
>>>>>>> b88e3bf1c141bb52d8a39cd61f485401231e9ad3
}
