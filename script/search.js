var oFloat_search = document.getElementById("float_search");
window.onscroll = function(){
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

if(scrollTop >= 280){
    oFloat_search.style.position = "fixed";
    oFloat_search.style.top = 0;
    oFloat_search.style.display ="block";

}else{
    oFloat_search.style.display ="none";
    oFloat_search.style.position = "absolute"
    oFloat_search.style.top = 280 + "px"
}
}

    