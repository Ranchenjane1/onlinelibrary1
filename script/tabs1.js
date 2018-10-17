// function Tab(btn_selector,item_selector){
//     this.abtn = document.querySelectorAll(btn_selector);
//     this.aItem = document.querySelectorAll(item_selector);
// }
// Tab.prototype.init = function(){
//     this.handleEvent();
// }
// // 绑定事件
// Tab.prototype.handleEvent = function(){
//     for(var i = 0;i < this.abtn.length;i++){
//         this.abtn[i].index = i;
//         this.abtn[i].onmouseover = this.changIndex.bind(this);
//     }
// }
// // 更改下标；
// Tab.prototype.changIndex = function(event){
//     var e = event || window.event;
//     var target = e.target || e.srcElement;
//     this.index = target.index;
//     this.show();
// }
// // 显示内容；
// Tab.prototype.show = function(){
//     for(var i = 0 ; i < this.aItem.length ; i ++){
//         this.aItem[i].style.display = "none";
//     }
//     this.aItem[this.index].style.display = "block";
// }
// var tab = new Tab(".b_nav li",".b_nav_float .text_content");
// tab.init();

$.each($(".b_nav li"),function(index,item){
    // $(this).css("border","yellow").siblings().css("border","gray")
    $(".b_nav li").on("mouseenter",index,function(event){
       $($(".b_nav_float .text_content")[index]).css("display","block")
    //    .siblings().css("display","none")
    })
    $(".b_nav li").on("mouseleave",index,function(event){
        $($(".b_nav_float .text_content")[index]).css("display","none")
     //    .siblings().css("display","none")
     })
})