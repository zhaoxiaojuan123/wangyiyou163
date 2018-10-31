import * as Types from './action-types'
import {getImg,getRight,getAutumn,getNew,getBag,getWash,getClothes} from '../api/HeaderImg'
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
    },
    getBagImg(){
        return function (dispatch,getState) {
            getBag().then(bagImg=>{
                dispatch({
                    type:Types.GET_BAG,
                    payload:bagImg
                })
            })
        }
    },
    getWashImg(){
        return function (dispatch,getState) {
            getWash().then(washImg=>{
                dispatch({
                    type:Types.GET_WASH,
                    payload:washImg
                })
            })
        }
    },
    getClothesImg(){
        return function (dispatch,getState) {
            getClothes().then(clothesImg=>{
                dispatch({
                    type:Types.GET_CLOTHES,
                    payload:clothesImg
                })
            })
        }
    }
}
