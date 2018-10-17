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
        // $($(".f_floating li")[index]).find("span").css({
        // 	color : "#fff"
        // })
		// $($(".f_floating li")[index]).siblings().find("span").css({
        // 	color : "#606060"
        // })
		
		
	// 	var clientHeight = document.documentElement.clientHeight;
	// 	if($(this).scrollTop() > clientHeight){
	//             $(".divSou").stop().animate({
	//                 top:0
	//             })
	//         }
	//         if($(this).scrollTop() <= clientHeight){
	//             $(".divSou").stop().animate({
	//                 top:"-83"
	//             })
	//         }
	// })
	
	// turn_top.onclick = function(){
    // 		var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    // 		scrollTop = "0"
    // 	}
	// })
