import * as Types from '../action-types';
import {combineReducers} from 'redux'
let initState={
    type:'recommoned',
   img:''
};
function sort(state=initState,action) {
    switch (action.type){
        case Types.CHANGE_TYPE:
            return {...state,type:action.val};
        case Types.GET_IMG:
            return {...state,img:payload.img}
    }
    return state;
};


//合并reducers
let reducer=combineReducers({
    sort,
  
});
export default reducer;