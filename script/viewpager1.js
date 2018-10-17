function Banner(){}
$.extend(Banner.prototype,{

        init : function(options){
           // 所有的图片;
           this.item_list = $(options.item_list);
           // 左按钮 ;
           this.left_btn = $(options.left_btn);
           // 右按钮 ;
           this.right_btn = $(options.right_btn);
           this.nowIndex = 0;
           // 有多少元素;
           this.item_num = this.item_list.length;
           this.ul = $("#bannerimg_b_bd ul");
           // 获取列表中第一个元素的宽度值;
           this.item_width = this.item_list.width();
            
           this.wrap = $("#b_slidebox_down");
           if(this.left_btn.length == 0 && this.right_btn.length == 0 && this.btn_list.length == 0){
               this.autoPlay();
               return 0;
           }
           this.bindEvent();
        },
        bindEvent : function(){
          
            this.left_btn.click($.proxy(this.prev , this));
            this.right_btn.click($.proxy(this.next , this));    
        },
        next:function(){
            if( this.nowIndex == this.item_num - 1){
                this.nowIndex = 1;
                this.ul.css({
                    left : 0
                })
            }else{
                this.nowIndex ++;
            }
            this.animate();
        },
        prev:function(){
            if( this.nowIndex == 0){
                this.nowIndex = this.item_num - 2;
                this.ul.css({
                    left : -(this.item_num - 1) * this.item_width
                })
            }else{
                this.nowIndex --;
            }

            this.animate();
        },
        toIndex:function(event){
            var target = event.target || event.srcElement;
            this.nowIndex = $(target).index();
            this.animate();
        },
        animate:function(){
            this.ul.stop().animate({
                left : -this.item_width * this.nowIndex
            })
        }
    })

    var banner = new Banner();

    banner.init({
        item_list : "#bannerimg_b_bd li",
        left_btn : ".prev",
        right_btn : ".next",
    })            