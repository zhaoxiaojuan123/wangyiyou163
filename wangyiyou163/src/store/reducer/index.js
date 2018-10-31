import * as Types from '../action-types';
import { combineReducers } from 'redux'
let initState1 = {
    sliders: [],
    personals:[]

};
function home(state = initState1, action) {
    switch (action.type) {
        case Types.SET_SLIDERS:
            return { ...state,sliders:action.payload }
            case Types.SET_HOMEPERSONAL:
            return {...state,personals:action.payload}
    }
    return state;
};

let initState2={
    type:'recommoned',
    nav:[],
    rightContent:[],
    autumn:[],
    new:[],
    bag:[],
    wash:[],
    clothes:[]
};
function sort(state=initState2,action) {
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
}

  
let initState = {
    currentTypes: 'tu',
    ary:{
        list:[], // 存储当前已经加载图片的顺序数据
        offset:0, // 代表当前页面已经加载多少条
        limit:4,
        hasMore:true // wode
    }
}

function puboo(state=initState,action) {
    switch(action.type){
       case Types.PUBU_GET:
       return {
        ...state,ary:{
            list:[...state.ary.list,...action.payload.list],
            offset:state.ary.offset+state.ary.list.length,
            limit:4,
            hasMore:action.payload.hasMore
        }
    }
    }
    return state;
};

let reducer=combineReducers({
    sort,
    home,
    puboo
});
export default reducer;
