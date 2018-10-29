import React from "react"
import './pubu.less'
import {connect} from 'react-redux'
import action from '../../store/actions-zxj'
 class Pubu extends React.Component {
    constructor(props) {
        super();

    }
    componentDidMount(){
        this.props.pubu()
    }
    render() {
        console.log(this.props)
        return (
            <div className="pubu-content">
            {this.props.ary.map((item,index)=>{
                return (
<ul className="ul-box" key={index}>
                    <li>
                        <div className="img-box">
                            <img src={item.url} />
                        </div>
                        <p>漂亮又好看，太喜欢了，啦啦啦</p>
                        <div className="p-box">
                            <div className="p-content">
                                <span className="span-box"><img src={item.tou} /></span>
                                <span className="span-content">{item.title}</span>
                            </div>
                            <div className='re-content'><span>热评</span><i>{item.hot}</i></div>
                        </div>
                    </li>
                   
                </ul>
                )
            })}
                
               
            </div>
        )
    }
}

export default connect(state=>({...state.puboo}),action)(Pubu)
