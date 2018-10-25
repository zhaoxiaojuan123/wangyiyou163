// ajax axios fetch(在低版本的IE下不支持)
// fetch 返回一个Promise的实例
// 获取数据
const HOST="http://localhost:3001"
export function get(url){
    // response : 是一个响应的对象；里面有状态码；响应体；
    // response.json : 把响应体的数据返回出去；
    return fetch(HOST+url).then(response=>response.json())
}
export function post(url,data){
    // response : 是一个响应的对象；里面有状态码；响应体；
    // response.json : 把响应体的数据返回出去；
    return fetch(HOST+url,{
        method:"post",
        headers:{
            "Content-Type":"application/json",
            Accept:"application/json" // 接受json格式数据类型
        },
        body:JSON.stringify(data)
    }).then(response=>response.json())
}
