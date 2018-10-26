import * as Types from './action-types'
import {getImg} from '../api/HeaderImg'
export default {
    changeType(val){
      return {type:Types.CHANGE_TYPE,val}
    },
    getImgs(){
       return function (dispatch,getState) {
           let {type}=getState().sort;
           getImg(type).then(payload=>{
               //console.log(payload);
               dispatch({
                   type:Types.GET_IMG,
                   payload,
               })
           })
       }
}
}
