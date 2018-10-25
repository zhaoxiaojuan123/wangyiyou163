import * as Types from '../action-types';
import {combineReducers} from 'redux'
let initState={
   
};
function home(state=initState,action) {
  
    return state;
};


//合并reducers
let reducer=combineReducers({
    home,
  
});
export default reducer;