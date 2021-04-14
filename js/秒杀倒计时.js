function timer(){

    let  spanList  = document.querySelectorAll('#main .countdown .arr span');
    // console.log(spanList);
    //1970年到现在的时间戳
    let $nowTime = new Date();
    // console.log($nowTime);

    //1970年到未来要计算的时间的时间戳
    let $futureTime = new Date("2021/3/12/22:00:00");

    // console.log($futureTime);
    
   let  _Time = ($futureTime - $nowTime) /1000;
    // console.log(_Time);


    let arr = [];

    let h = Math.floor( _Time / 60 / 60 % 24 );
    h = h<10 ?  "0" + h : h;
    arr[0] = h.toString().charAt(0);
    arr[1] = h.toString().charAt(1);

    let m = Math.floor( _Time / 60 % 60  );
    m = m<10 ?  "0" + m : m;
    arr[2] = m.toString().charAt(0);
    arr[3] = m.toString().charAt(1);

    let s = Math.floor( _Time % 60 );
    s = s<10 ?  "0" + s : s;
    arr[4] = s.toString().charAt(0);
    arr[5] = s.toString().charAt(1);


    for(let i=0; i<spanList.length;i++){
        
        spanList[i].innerHTML = arr[i]

    }
}

timer();
setInterval('timer()',1000);
   
