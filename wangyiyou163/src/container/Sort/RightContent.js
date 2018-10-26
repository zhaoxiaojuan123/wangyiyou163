import React from 'react';
import {Route} from 'react-router-dom';
import Recommend from './content/Recommend';
import Autumn from './content/Autumn';
import New from './content/New';
import Pop from './content/Pop';
import Family from './content/Family';
import Bag from './content/Bag';
import Clothes from './content/Clothes';
import Electric from './content/Electric';
import Wash from './content/Wash';
import Food from './content/Food';
import Kitchen from './content/Kitchen';
import Baby from './content/Baby';
import Language from './content/Language';
import Special from './content/Special';

export default class RightContent extends React.Component{

    render(){
        return <div className="right-content">
            <Route path="/sort/recommend" component={Recommend} ></Route>
            <Route path="/sort/autumn" component={Autumn}></Route>
            <Route path="/sort/new" component={New}></Route>
            <Route path="/sort/pop" component={Pop}></Route>
            <Route path="/sort/family" component={Family}></Route>
            <Route path="/sort/bag" component={Bag}></Route>
            <Route path="/sort/clothes" component={Clothes}></Route>
            <Route path="/sort/electric" component={Electric}></Route>
            <Route path="/sort/wash" component={Wash}></Route>
            <Route path="/sort/food" component={Food}></Route>
            <Route path="/sort/kitchen" component={Kitchen}></Route>
            <Route path="/sort/baby" component={Baby}></Route>
            <Route path="/sortlanguage" component={Language}></Route>
            <Route path="/sort/special" component={Special}></Route>
        </div>
    }
}
