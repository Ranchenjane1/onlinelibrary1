$.each($(".user-wechat ul li"),function(index,item){
    $(item).on("mouseenter",index,function(event){
       $($(".userlogin_idea .userslogin")[index]).css("display","block")
       .siblings().css("display","none")
    })
})