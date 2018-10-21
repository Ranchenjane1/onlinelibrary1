$(function(){
	$(window).scroll(function(){ 
		
        if($(this).scrollTop() > 450){
            $(".f_floating").css({
                display : "block"
            })																	
        }
        if($(this).scrollTop() <= 450 ){
            $(".f_floating").css({
                display : "none"
            })
        }
        
        
        
        var index = Math.floor(($(this).scrollTop()-450)/1100)
        $($(".f_floating li")[index]).css({
        	background : "#f60"
        })
        .siblings("li").css({
        	background : "#928b87"
        })
	}) 
})  
var oTop_banner = document.getElementById("top_banner");
oTop_banner.onclick = function(){
    if(document.body.scrollTop){
        document.body.scrollTop = 0

    }else{
        document.documentElement.scrollTop = 0
    }
    scrollTop = 0
}