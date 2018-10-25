import React from 'react';
import {NavLink} from 'react-router-dom'
export default class LeftNav extends React.Component{
    render(){
        return <div className="leftnav">
            <div className="left">
                <NavLink to={'/sort/recommend'}><p>推荐专区</p></NavLink>
                <NavLink to={'/sort/autumn'}><p>秋季专区</p></NavLink>
                <NavLink to={'/sort/new'}><p>新品专区</p></NavLink>
                <NavLink to={'/sort/pop'}><p>爆品专区</p></NavLink>
                <NavLink to={'/sort/family'}><p>居家</p></NavLink>
                <NavLink to={'/sort/bag'}><p>鞋包配饰</p></NavLink>
                <NavLink to={'/sort/clothes'}><p>服装</p></NavLink>
                <NavLink to={'/sort/electric'}><p>电器</p></NavLink>
                <NavLink to={'/sort/wash'}><p>洗护</p></NavLink>
                <NavLink to={'/sort/food'}><p>饮食</p></NavLink>
                <NavLink to={'/sort/kitchen'}><p>餐厨</p></NavLink>
                <NavLink to={'/sort/baby'}><p>婴童</p></NavLink>
                <NavLink to={'/sort/language'}><p>文体</p></NavLink>
                <NavLink to={'/sort/special'}><p>特色区</p></NavLink>
            </div>
        </div>
    }
}
