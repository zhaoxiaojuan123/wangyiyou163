import * as Types from '../action-types';
import {combineReducers} from 'redux'

let initState1={
   num:0,
   ary:[]
};
function home(state={},action) {
  
    return state;
};
function puboo(state=initState1,action) {
    switch(action.type){
       case Types.PUBU:
       return {...state,ary:action.payload}
    }
  
    return state;
};

//合并reducers
let reducer=combineReducers({
    home,
    puboo
  
});
export default reducer;