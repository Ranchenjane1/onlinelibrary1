        // 参数1：按钮选择器；
        // 参数2：是详情选择器；
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
        //     this.aItem[this.index].style.display = "block"
        // }
        // var tab = new Tab(".user_hd li",".user_bd ul");
        // tab.init();

        // // 选项卡；
        //  $(".user_hd>ul>li").mouseover(function(){
        //     var _index = $(this).index() + 1;
        //     $(".user_bd >ul").eq(_index).show().siblings("ul").hide();
        //     $(this).addClass("on").siblings().removeClass("on");
        // })
 
        $.each($(".user_hd ul li"),function(index,item){
            // $(this).css("border","yellow").siblings().css("border","gray")
            $(item).on("mouseenter",index,function(event){
               $($(".user_bd ul")[index]).css("display","block")
               .siblings().css("display","none")
            })
        })