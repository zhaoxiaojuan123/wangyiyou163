import React from "react"
import './pubu.less'
import Loading from '../../component/Loadings/Loadings'
export default class Pubu extends React.Component {
    constructor() {
        super();
    }
    render() {
        console.log(this.props)
        let { list } = this.props.ary;
        console.log(list,555)
        let list1=list.filter((item)=>{
        return item.category=='tu'
        })
        let list2=list.filter((item)=>{
            return item.category=='tupic'
            })
            console.log(list1,list2,666)
        return (
            <div className="pubu-content">
                <ul className="ul-box" >
                    {list1.length?(list1.map((item, index) => {
                        return (
                            <li key={index}>
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
                             )
                            })):<Loading/>}
                   
                </ul>
                <ul className="ul-box" >
                    {list2.length?(list2.map((item, index) => {
                        return (
                            <li key={index}>
                                <div className="img-box">
                                    <img src={item.url} />
                                </div>
                                <p>风景好美呀，心情太好啦</p>
                                <div className="p-box">
                                    <div className="p-content">
                                        <span className="span-box"><img src={item.tou} /></span>
                                        <span className="span-content">{item.title}</span>
                                    </div>
                                    <div className='re-content'><span>热评</span><i>{item.hot}</i></div>
                                </div>
                            </li>
                             )
                            })):<Loading/>}
                   
                </ul>
                   
              
               <div className='clear'></div>
            </div>
                )
            }
        }
        
        
