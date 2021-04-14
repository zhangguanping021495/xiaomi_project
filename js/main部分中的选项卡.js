


//家电部分
miHome()
function miHome(){

    let hot = document.querySelectorAll("#main .mi-home .home-nav .hot");
    let homeList = document.querySelector("#main .mi-home .home-list");
        

    for(let i =0; i < hot.length; i++){

        hot[i].onmouseenter = function(){

            for(let j=0; j<hot.length; j++){
                hot[j].classList.remove("select");
            }
            hot[i].classList.add("select");
            homeList.style.marginLeft =  i * -1226 + "px";   
        }
    }
}

//智能部分
intelligent()
function intelligent(){

    let hot = document.querySelectorAll("#main .intelligent .intelligent-nav .hot");
    let intelligentList = document.querySelector("#main .intelligent .intelligent-list");
        

    for(let i =0; i < hot.length; i++){

        hot[i].onmouseenter = function(){

            for(let j=0; j<hot.length; j++){
                hot[j].classList.remove("select");
            }
            hot[i].classList.add("select");
            intelligentList.style.marginLeft =  i * -1226 + "px";   
        }
    }
}
//搭配
match()
function match(){

    let hot = document.querySelectorAll("#main .match .match-nav .hot");
    let matchList = document.querySelector("#main .match .match-list");
        

    for(let i =0; i < hot.length; i++){

        hot[i].onmouseenter = function(){

            for(let j=0; j<hot.length; j++){
                hot[j].classList.remove("select");
            }
            hot[i].classList.add("select");
            matchList.style.marginLeft =  i * -1226 + "px";   
        }
    }
}
//配件
accessory()
function accessory(){

    let hot = document.querySelectorAll("#main .accessory .accessory-nav .hot");
    let accessoryList = document.querySelector("#main .accessory .accessory-list");
        

    for(let i =0; i < hot.length; i++){

        hot[i].onmouseenter = function(){

            for(let j=0; j<hot.length; j++){
                hot[j].classList.remove("select");
            }
            hot[i].classList.add("select");
            accessoryList.style.marginLeft =  i * -1226 + "px";   
        }
    }
}

around()
function around(){

    let hot = document.querySelectorAll("#main .around .around-nav .hot");
    let accessoryList = document.querySelector("#main .around .around-list");
        

    for(let i =0; i < hot.length; i++){

        hot[i].onmouseenter = function(){

            for(let j=0; j<hot.length; j++){
                hot[j].classList.remove("select");
            }
            hot[i].classList.add("select");
            accessoryList.style.marginLeft =  i * -1226 + "px";   
        }
    }
}