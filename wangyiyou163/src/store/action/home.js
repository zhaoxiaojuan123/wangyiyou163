import * as Types from "../action-types"
import {getSliders,  getPersonalSliders} from "../../api/home"
export default{
    getSlider(){
        return function(dispatch,getState){
            setTimeout(()=>{
                getSliders().then(sliders=>{
                    dispatch({
                        type:Types.SET_SLIDERS,
                        payload:sliders
                    })
                })

            },0)
           
        }
    },
    getPersonalSlider(){
        return function(dispatch,getState){
            setTimeout(()=>{
                getPersonalSliders().then(homepersonal=>{
                    dispatch({
                        type:Types.SET_HOMEPERSONAL,
                        payload:homepersonal 
                    })
                })
            },0)
        }
    }
}