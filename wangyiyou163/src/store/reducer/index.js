import * as Types from '../action-types';
<<<<<<< HEAD
import { combineReducers } from 'redux'
let initState = {
    sliders: [],
    personals:[]

};
function home(state = initState, action) {
    switch (action.type) {
        case Types.SET_SLIDERS:
            return { ...state,sliders:action.payload }
            case Types.SET_HOMEPERSONAL:
            return {...state,personals:action.payload}
    }
=======
<<<<<<< HEAD
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
=======
import {combineReducers} from 'redux' // 我的
  
let initState = {
    currentTypes: 'tu',
    ary:{
        list:[], // 存储当前已经加载图片的顺序数据
        offset:0, // 代表当前页面已经加载多少条
        limit:4,
        hasMore:true // wode
    }
}
function home(state={},action) {
    return state;
};
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
  
>>>>>>> 70e69dcb8327abe2677674f1f5377fa4d570994d
>>>>>>> cde8079415859dcb0088d8131cac1a6e7688179c
    return state;
};

//合并reducers
<<<<<<< HEAD
let reducer = combineReducers({
    home,

=======
let reducer=combineReducers({
<<<<<<< HEAD
    sort,
=======
    home,
    puboo
>>>>>>> 70e69dcb8327abe2677674f1f5377fa4d570994d
  
>>>>>>> cde8079415859dcb0088d8131cac1a6e7688179c
});
export default reducer;