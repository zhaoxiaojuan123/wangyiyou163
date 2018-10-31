import * as Types from './action-types'
import { getpubus } from '../api/home'
export default {
    pubu(){
        return function(dispatch,getState){
            
                puBu().then(sliders => {
                    // sliders 代表请求之后的数据；数组
                    dispatch({
                      type: Types.PUBU_GET,
                      payload: sliders
                    })
                  })
            }
           
            }
            ,
            getPuBu(){ // 瀑布流函数
                return function (dispatch, getState) {
                    let { currentTypes, ary: { offset, limit } } = getState().puboo;
              
                    getpubus(currentTypes, offset, limit).then(payload => {
                     // console.log(payload,666) 
                      dispatch({
                        type: Types.PUBU_GET,
                        payload
                      })
                    })
                  }
            }
            ,
            getLesson() { //wode
                return function (dispatch, getState) {
                  let { currentTypes, lessons: { offset, limit } } = getState().home;
            
                  getLesson(currentTypes, offset, limit).then(payload => {
                   // console.log(payload,666) 
                    dispatch({
                      type: Types.SET_LESSONS,
                      payload
                    })
                  })
                }
              }
        }
   
