import React from 'react';
import RightContenttwo from '../public/RightContenttwo'
import linebox from '../../../../server/mock/linebox'
export default class Family extends React.Component{
    constructor(){
        super();
        this.state={linebox:linebox}
    }
    render(){
        return <div>
            <RightContenttwo data={this.state.linebox}/>
        </div>
    }
}
