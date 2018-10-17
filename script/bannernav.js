var oB_nav1 = document.getElementsByClassName("b_nav1");
var oB_nav_float =document.querySelectorAll(".b_nav_float");
for(i = 0;i < oB_nav1.length-1;i++){
    oB_nav1[i] = i;
    }
    oB_nav1[i].onmouseenter = function(){
        oB_nav_float.style.display = "block";
    }
    oB_nav1[i].onmouseleave = function(){
        oB_nav_float.style.display = "none";
    }