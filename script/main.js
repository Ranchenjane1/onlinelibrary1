var oB_nav1=document.getElementsByClassName("b_nav1"),oB_nav_float=document.querySelectorAll(".b_nav_float");for(i=0;i<oB_nav1.length-1;i++)oB_nav1[i]=i;oB_nav1[i].onmouseenter=function(){oB_nav_float.style.display="block"},oB_nav1[i].onmouseleave=function(){oB_nav_float.style.display="none"};var oHead_box=document.getElementById("head_box"),oIcon1_inner=document.getElementById("icon1_inner");oIcon1_inner.onclick=function(){oHead_box.style.display="none"};var oRegist_free=document.getElementById("regist_free"),oR_icon=document.getElementById("r_icon");oR_icon.onclick=function(){oRegist_free.style.display="none"};var oSearchselect=document.getElementById("searchselect"),oSearchoptions=document.getElementById("searchoptions");oSearchselect.onmousedown=function(){oSearchoptions.style.display="block"},oSearchselect.onmouseleave=function(){oSearchoptions.style.display="none"};