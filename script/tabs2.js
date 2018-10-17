$.each($(".link_tit ul li"),function(index,item){
    // $(this).css("border","yellow").siblings().css("border","gray")
    $(item).on("mouseenter",index,function(event){
       $($(".link_text ul")[index]).css("display","block")
       .siblings().css("display","none")
    })
})