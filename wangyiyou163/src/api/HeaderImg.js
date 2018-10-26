import {get} from "./index"

export function getImg(title){
    return get (`/getHeaderImg/${title}`)
}

