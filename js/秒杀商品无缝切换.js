
function change(){
    var num = 0;
    $prev =  $("#main .arrow .prev");
    $next =  $("#main .arrow .next");
 //  console.log($prev,$next);

    //点击右边
   $next.click(function(){
        
        num++;
        if(num >=3){
            num = 3;
            
        }
        
        $("#main .list-right .shop_list").animate({marginLeft:num*-992},500);
   }) 
   //点击左边
   $prev.click(function(){
        
    num--;
    if(num <=0){
        num = 0;
    }
    $("#main .list-right .shop_list").animate({marginLeft:num*-992},500);
}) 
    //自动轮播
    setInterval(()=>{
      
        num++
        if(num >=4){
            num = 0
        }
        $("#main .list-right .shop_list").animate({marginLeft:num*-992},300);
    },5000)

   
 
}
    
  
change()

