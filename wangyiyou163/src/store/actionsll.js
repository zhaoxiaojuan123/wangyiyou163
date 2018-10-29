import * as Types from './action-types'
import {getImg,getRight,getAutumn,getNew} from '../api/HeaderImg'
export default {
    // changeType(val){
    //   return {type:Types.CHANGE_TYPE,val}
    // },
    getImgs(){
       return function (dispatch,getState) {
           getImg().then(headerImg=>{
                   //console.log(payload);
                   dispatch({
                       type:Types.GET_IMG,
                       payload:headerImg,
                   })
               })
       }
    },
    getRightContent(){
        return function (dispatch,getState) {
            getRight().then(circleImg=>{
                dispatch({
                    type:Types.GET_RIGHT,
                    payload:circleImg
                })
            })
        }
    },
    getAutumnImg(){
        return function (dispatch,getState) {
            getAutumn().then(autumnImg=>{
                dispatch({
                    type:Types.GET_AUTUMN,
                    payload:autumnImg
                })
            })
        }
    },
    getNewImg(){
        return function (dispatch,getState) {
            getNew().then(newImg=>{
                dispatch({
                    type:Types.GET_NEW,
                    payload:newImg
                })
            })
        }
    }
}
