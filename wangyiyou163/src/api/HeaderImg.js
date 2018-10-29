import {get} from "./index"

export function getImg(){
    return get ('/getHeaderImg')
}

export function getRight() {
    return get('/getCircle')
}
export function getAutumn() {
    return get('/getAutumn')
}
export function getNew() {
    return get('/getNew')
}