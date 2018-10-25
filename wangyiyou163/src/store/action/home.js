import * as Types from "../action-types"
import {getSliders} from "../../api/home"
export default{
    getSlider(){
        return function(dispatch,getState){
            getSliders().then(sliders=>{
                dispatch({
                    type:Types.SET_SLIDERS,
                    payload:sliders
                })
            })
        }
    }
}