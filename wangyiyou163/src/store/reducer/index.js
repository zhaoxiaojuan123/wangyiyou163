import * as Types from '../action-types';
import { combineReducers } from 'redux'
let initState = {
    sliders: [],

};
function home(state = initState, action) {
    switch (action.type) {
        case Types.SET_SLIDERS:
            return { ...state, sliders: action.payload }
    }
    return state;
};


//合并reducers
let reducer = combineReducers({
    home,

});
export default reducer;