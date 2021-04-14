
window.addEventListener('load',function(){
//             var slideImage = document.querySelector('.slideImage');
//             var lis = slideImage.children ;
//             // console.log(lis)
//             var circle = document.querySelector('.circle') ;
//             var circleLis = circle.children ;
//             var imageBox = document.querySelector('.imageBox') ;
//             var imageBoxW = imageBox.offsetWidth;
//             var rightArrow = document.querySelector('.rightArrow') ;
//             var leftArrow = document.querySelector('.leftArrow')
//             var index2 = 0 ;
//             var num = 0 ;
//             var flag = true ;
//             var current = 'current' ;
//             addCircle() ;
//             kelong() ;
//             Circle() ;
//             arrow() ;
//         //动态添加小圆圈
//         function addCircle(){
//             for(var i=0;i<lis.length;i++){
//                 var div = document.createElement('div') ;
//                 div.className = 'circle-btn' ;
//                 circle.appendChild(div) ;               
//             };
//             circle.children[0].classList.add(current);
//         }
//         //克隆第一张图片
//         function kelong(){
//             slideImage.appendChild(lis[0].cloneNode(true)) ;
//         }
        
//         //点亮小圆圈并轮播图片
//         function Circle(){
//             for(var i=0;i<circleLis.length;i++){
//                 circleLis[i].index = i ;
//                 circleLis[i].addEventListener('click',function(){
//                     circle.querySelector('.current').classList.remove(current);
//                     this.classList.add(current) ;
//                     animate(slideImage,-this.index * imageBoxW) ;
//                     num = this.index ;
//                     index2 = this.index ;
//                 });
//             };            
//         }
//         //点击左右箭头轮播图片
//         function arrow(){
//             //点击右箭头轮播图片
//             rightArrow.addEventListener('click',()=>{
//                 if (flag) {
//                     flag = false ;
//                     if (index2==lis.length-1) {
//                         index2 = 0 ;
//                         slideImage.style.left = 0 ;
//                     };
//                     index2++ ;
//                     animate(slideImage,-index2*imageBoxW,function(){
//                         flag = true ;
//                     }) ;
//                     num++ ;
//                     if(num==circleLis.length){
//                         num=0 ;
//                     };
//                     circleChange() ;                   
//                 } ;
//             });
//             //点击左箭头轮播图片
//             leftArrow.addEventListener('click',()=>{
//                 if (flag) {
//                     flag = false ;
//                     if (index2==0) {
//                         index2 = lis.length-1 ;
//                         slideImage.style.left = -index2 * imageBoxW  + 'px' ;
//                     };
//                     index2-- ;
//                     animate(slideImage,-index2*imageBoxW,function(){
//                         flag = true
//                     }) ;
//                     num-- ;
//                     num = num<0 ? circleLis.length-1 : num ;
//                     circleChange() ;          
//                 }
//             });
//             } ;
//             //自动轮播
//             var timer = setInterval(autoPlay,1000) ;
//             function autoPlay(){
//                 rightArrow.click() ;
//             } ;
//             imageBox.addEventListener('mouseenter',()=>{
//                 clearInterval(timer) ;
//             }) ;
//             imageBox.addEventListener('mouseleave',()=>{
//                 timer = setInterval(autoPlay,1000) ;
//             }) ;
        
//         //切换小圆点的背景色
//         function circleChange(){
//             circle.querySelector('.current').classList.remove(current) ;
//             circleLis[num].classList.add(current) ; 
//         }
//         // //封装动画函数
//         function animate(obj,target,callback){
//             clearInterval(obj.timer);
//             obj.timer = setInterval(function(){
//                 var step = (target-obj.offsetLeft) / 10 ;
//                 step = step<0 ? Math.floor(step) : Math.ceil(step) ;
//                 if (obj.offsetLeft==target) {
//                     clearInterval(obj.timer) ;
//                     callback && callback() ;
//                 }else{
//                     obj.style.left = obj.offsetLeft + step + 'px' ;
//                 } ;
//             },15) ;
//         };

let oBanner = document.querySelector('#content .imageBox');
let oImgUl = document.querySelector('#content .imageBox .slideImage');
let oArrow = document.querySelectorAll('#content .imageBox .btn');
let oTabLi = document.querySelectorAll("#content .imageBox .circle div");
let index = 0; //辅助变量，显示第几个
let len  = oTabLi.length;
let timer;
//1.tab的点击事件
oTabLi.forEach((ele,i)=>{
    ele.onclick = function(){
        change(i)
    }
})
//2.左右按钮
oArrow.forEach((ele,i)=>{
    ele.onclick = function(){
        //用i判断点击的是左还是右按钮，左按钮为0，右按钮为1，判断true或flase,用三木运算
        
        change(index + ( i?1:-1));
    }
})
//3.定时器
// timer = setInterval(() => {
//     change(index+1)
// }, 1500);

// oBanner.onmouseenter = function(){
//     clearInterval(timer)
// }
// oBanner.onmouseleave = function(){
//     timer = setInterval(() => {
//         change(index+1)
//     }, 1500);
   
// }
//鼠标移入
oBanner.onmouseenter = function(){
    clearInterval(timer)
};
oBanner.onmouseleave = (function fn(){
    timer = setInterval(() => {
        change(index+1)
    }, 1500);
    return fn;
})()


//封装动画函数
function change(i){
    //1.改变图片区域的ul
    oImgUl.style.transition = "margin-left .3s";
    oImgUl.style.marginLeft = "-" + (i+1) + "00%";
    //2.判断如果i等于5或等于-1的时候让它瞬间变成-100%，或-500%
    if( i===len || i===-1 ){
                     
        let left = i === len ? "-100%":"-500%";

        //设置一个定时器，让它在循环定时变化前先瞬间变化，这样就有个过渡效果，注意时间不能等于或大于循环定时器
        setTimeout(()=>{
            oImgUl.style.transition = "margin-left 0s";
            oImgUl.style.marginLeft = left;
        },500)
    };
    //3.改变tab的样式
    oTabLi[index].classList.remove('select');
    index = i;
    //判断index不能超过len
    // if(index>len-1){
    //     index = 0
    // }
    index %= len
    if(index<0){
        index = len-1
    };
   
    oTabLi[index].classList.add('select');
   
}





        //返回顶部
        $('.back').css('display','none') ;
        var backTop = document.querySelector('#main').offsetTop ;
        $(document).on('scroll',function(){
            var head = pageYOffset;
            if (head>=backTop) {
                $('.back').css('display','block') ;
            }else{
                $('.back').css('display','none') ;
            }
        }) ;
        $('.back').on('click',function(){
            $("body,html").animate({
                scrollTop:0
            })
        })
 });
 