import * as Types from './action-types'
import { puBu } from '../api/home'
export default {
    pubu(){
        return function(dispatch,getState){
            
                puBu().then(sliders => {
                    // sliders 代表请求之后的数据；数组
                    dispatch({
                      type: Types.PUBU,
                      payload: sliders
                    })
                  })
            }
           
            }
        }
   
