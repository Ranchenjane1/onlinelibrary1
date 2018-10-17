function Banner(){}
    $.extend(Banner.prototype,{
        init : function(options){
        this.item_list = $(options.item_list);
        // 左按钮
        this.left_btn = $(options.left_btn);
        // 右按钮
        this.right_btn = $(options.right_btn);
        // 按钮列表；
        this.btn_list = $(options.btn_list);
        this.nowIndex = 0;
        // 有多少元素；
        this.item_num = this.item_list.length;
        this.ul = $(".slideShow ul");
        // 获取列表中一个元素的宽度值；
        this.item_width = this.item_list.width();
        
        this.wrap = $("#slideShow_box");
        if(this.left_btn.length == 0 && this.right_btn == 0 && this.btn_list ==0){
            this.autoPlay();
            return 0;
        }
        this.bindEvent();
        },
        bindEvent :function(){
            // this.left_btn.click(this.prev.bind(this));
            this.left_btn.click($.proxy(this.prev , this));
            this.right_btn.click($.proxy(this.next , this));
            this.btn_list.mouseover($.proxy(this.toIndex , this));
        },
        next:function(){
            if(this.nowIndex == this.item_num - 1){
                this.nowIndex = 1;
                this.ul.css({
                    left:0
                })
            }else{
                this.nowIndex ++;
            }
            this.animate();

        },
        prev:function(){
            if(this.nowIndex == 0){
                this.nowIndex = this.item_num- 2;
            //   console.log(this.nowIndex);
               (this.nowIndex)
                this.ul.css({
                    left:-(this.item_num - 1)* this.item_width
                })
            }else{
                this.nowIndex --;
            }
            this.animate();

        },
        toIndex:function(event){
            // 要获取当前元素的下标吗；
            var target = event.target || event.srcElement;
            this.nowIndex = $(target).index();
            this.animate();

        },
        animate:function(){

            this.ul.stop().animate({
                left: -this.item_width * this.nowIndex
            })
            var index = this.nowIndex == this.item_num - 1 ? 0 : this.nowIndex;
            this.btn_list.eq(index).addClass("active")
            .siblings(".showNav span").removeClass("active");

        },  
        autoPlay:function(){
            this.autoPlay_timer = setInterval(function(){
                this.right_btn.triggerHandler("click");
            }.bind(this),2000)
        }
    })
    var banner = new Banner();
    banner.init({
            item_list : "#slideShow_box li",
            left_btn : ".store_prev",
            right_btn : ".store_next",
            btn_list : "#slideShow_box1 span" 
        })
    banner.autoPlay();