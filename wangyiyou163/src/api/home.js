import {get} from "./index"
// 获取轮播图数据
export function getSliders(){
    
 return get("/getSliders")
}
export function getPersonalSliders(){
    
    return get("/getPersonalSliders")
}
export function getHomeFlashsales(){
    
    return get("/getHomeFlashsales")
}
export function puBu(){
    
    return get("/pubu")
    }

// category 代表的是课程的类型
//offset 代表的是偏移，页面已经加载多少条
// limit 限制加载多少条
export function getpubus(category,offset,limit){

    return get (`/getpubus/${category}?offset=${offset}&limit=${limit}`)
}
export function getLesson(category,offset,limit){

    return get (`/getLessons/${category}?offset=${offset}&limit=${limit}`)
}
