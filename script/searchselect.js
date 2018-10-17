var oSearchselect = document.getElementById("searchselect");
var oSearchoptions = document.getElementById("searchoptions");
var sanjue
oSearchselect.onmousedown = function(){
    oSearchoptions.style.display = "block";

}
oSearchselect.onmouseleave = function(){
    oSearchoptions.style.display = "none";
}
var oComSelect = document.getElementById("comSelect");
var oComTagoptions = document.getElementById("comTagoptions");
oComSelect.onmousedown = function(){
    oComTagoptions.style.display = "block";
}
oComSelect.onmouseleave = function(){
    oComTagoptions.style.display = "none";
}