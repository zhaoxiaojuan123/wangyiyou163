import React from 'react';
import {Link} from 'react-router-dom'
export default class Search extends React.Component{

    render(){
        //console.log(this.props);
        return <div className="write">
            <div className="search" >
                <Link to={'/search'}>
                    <i className="iconfont icon-sousuo"></i>
                    <span>搜索商品, 共16955款好物</span>
                </Link>

            </div>
        </div>
    }
}
