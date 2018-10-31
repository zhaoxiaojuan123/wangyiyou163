import * as Types from '../action-types';
import {combineReducers} from 'redux'
let initState={
    type:'recommoned',
    nav:[],
    rightContent:[],
    autumn:[],
    new:[],
    bag:[],
    wash:[],
    clothes:[]
};
function sort(state=initState,action) {
    switch (action.type){
        // case Types.CHANGE_TYPE:
        //     return {...state,type:action.val};
        case Types.GET_IMG:
            return {...state,nav:action.payload};
        case  Types.GET_RIGHT:
            return {...state,rightContent:action.payload};
        case Types.GET_AUTUMN:
            return {...state,autumn:action.payload};
        case Types.GET_NEW:
            return {...state,new:action.payload};
        case Types.GET_BAG:
            return {...state,bag:action.payload};
        case Types.GET_WASH:
            return {...state,wash:action.payload};
        case Types.GET_CLOTHES:
            return {...state,clothes:action.payload}
    }
    return state;
};


//合并reducers
let reducer=combineReducers({
    sort,
  
});
export default reducer;