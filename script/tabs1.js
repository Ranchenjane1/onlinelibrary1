
$.each($(".b_nav li"),function(index,item){
    $(item).on("mouseenter",index,function(event){
       $($(".b_nav_float .text_content")[index]).css("display","block")
    })
    $(item).on("mouseleave",index,function(event){
        $($(".b_nav_float .text_content")[index]).css("display","none")
     })
})