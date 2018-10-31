
export function loadMore(element,callback){
    setTimeout(()=>{
        let scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
        let clientH=document.documentElement.clientHeight||document.body.clientHeight;
        let scrollH=element.offsetTop+element.offsetHeight+100;
        console.log(scrollTop,clientH,scrollH,888)
        if(scrollTop+clientH>scrollH){
            // 如果盒子的高度加上滚动条卷起的高度+10；大于盒子总高度就重新发送请求获取新的数据
            callback();
        }
    },200)

} // wode
export function downRefresh(element,callback){
    console.log(22)
// 给元素绑定scroll事件；当元素的滚动条发生卷去时，执行对应的函数
    document.addEventListener("scroll",()=>{
        console.log(89)
        let scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
        let clientH=document.documentElement.clientHeight||document.body.clientHeight;
        let scrollH=element.offsetTop+element.offsetHeight+100;
        if(scrollTop+clientH>scrollH){
            // 如果盒子的高度加上滚动条卷起的高度+10；大于盒子总高度就重新发送请求获取新的数据
            callback();
        }
        
    })

}