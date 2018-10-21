function ShopCar(){

}
$.extend(ShopCar.prototype,{
    init:function(){
        this.main = $(".wrap ul")
        this.loadJson()
        .then(function(res){
            // console.log(res);
            this.json = res.result.wall.list;
            this.renderPage()
        })
        this.bindEvent();
        this.listSum();
    },
    loadJson:function(){
        var opt = {
            url:"http://localhost:8080/proxy/list.mogujie.com/search",
            data:{start:0,count:40},
            type:"GET",
            context:this
        }
        return $.ajax(opt);
    },
    renderPage:function(){  
        //console.log(this.json);
        var html ="";
        for(var i = 0; i < this.json.length; i++){
            html += `<li class ="box">
            <a href="#">
              <img src = "${this.json[i].show.img}" data-id="${this.json[i].iid}" alt="">
              <p>${this.json[i].title}</p>
              <div><span>${this.json[i].price}</span>
              <b>${this.json[i].orgPrice}</b>
              </div>
              <strong data-id=${this.json[i].iid}>加入购物车</strong>
             </a>
              </li>
            `  
          }
          $(".wrap ul").html(html);
    },
    bindEvent:function(){
        $(".wrap ul").on("click","strong",this.addCar.bind(this));
        // $(".wrap ul").on("click","img",this.demail.bind(this));
        $(".shopCar>div").on("mouseenter",this.showList.bind(this));
        $(".shopCar>div").on("mouseleave",function(){
            $(".goodslist").children().remove();
        });
        $(".shopCar>div").on("click",function(event){
            var target = event.target;
            if(target != $(".shopCar>div")[0]) return 0;
            $.removeCookie("shopCar");
            // 执行鼠标移出事件;
            $(".shopCar>div").triggerHandler("mouseleave");
            this.listSum();
        }.bind(this));

    },
    addCar:function(){
        // 我怎磨知道把谁加入购物车之中？
        var target = event.target;
        // 获取data-id；
      
        var goodsId = $(target).attr("data-id");
        //console.log(goodsId)
                var cookie;
                if((cookie = $.cookie("shopCar"))){
                    // 将字符串转换为数组, 方便插入操作;
                    // console.log(cookie);
                    var cookieArray = JSON.parse(cookie);
                    // console.log(cookieArray)
                    // 判定当前要添加的商品 是否已经存在在购物车里;
                    // 表示是否存在商品;
                    var hasGoods = false;
                    for(var i = 0 ; i < cookieArray.length ; i ++){
                        if(cookieArray[i].iid == goodsId ) {
                            // 存在 商品;
                            hasGoods = true;
                            cookieArray[i].num ++;
                            break;
                        }
                    }
                    // 如果没有商品;
                    if(hasGoods == false){
                        var goods = {
                            iid : goodsId,
                            num : "1"
                        }
                        cookieArray.push(goods);
                    }

                    // 将数组 转为字符串 方便 储存cookie;

                    // console.log(JSON.stringify(cookieArray));
                    $.cookie("shopCar",JSON.stringify(cookieArray));
                }else{
                    $.cookie("shopCar",`[{"iid":"${goodsId}","num":"1"}]`);
                }
                // console.log($.cookie("shopCar"));
                this.listSum();
            },
            showList:function(event){
                // 判定是否存在购物车,如果不存在购物车就没必要拼接列表了;
                var target = event.target;
                if(target != $(".shopCar>div")[0]) return 0;
                var cookie;
                if(!(cookie = $.cookie("shopCar"))){ return 0; };
                var cookieArray = JSON.parse(cookie);

                var html = "";
                // for 购物车里有多少商品就拼接多少个;
                //console.log(cookieArray.length)
                for(var i = 0 ; i < cookieArray.length ; i ++){
                    //console.log(cookieArray[i]);
                    // for 判断哪一个商品是购物车里的商品;
                    for(var j = 0 ; j < this.json.length ; j ++){
                        // console.log(this.json.length)
                        console.log(cookieArray[i].iid,this.json[j].iid)
                        if(cookieArray[i].iid == this.json[j].iid){
                            html += `<li data-id="${cookieArray[i].iid}">
                                        <img data-id=${"i"} src="${this.json[j].show.img}" alt="">
                                        <p>${this.json[j].title}</p>
                                        <strong>${cookieArray[i].num}</strong>
                                    </li>`;
                            break;
                        }
                    }
                    
                }
               //console.log($(".goodslist"));
                $(".goodslist").html(html);
            },
            listSum:function(){
                var cookie;
                if(!(cookie = $.cookie("shopCar"))){ 
                    $(".shopCar").find("span").html(0);
                    return 0;
                };
                var cookieArray = JSON.parse(cookie);
                var sum = 0;
                for(var i = 0 ; i < cookieArray.length ; i ++){
                    sum += Number(cookieArray[i].num);
                }
                $(".shopCar").find("span").html(sum);
            },
            demail:function(event){
               
                // var imglist =$("#wrap img");
                // var target = event.target ;
                // console.log(imglist)
                // var imgArr = Array.from(imglist);
                // // var cookie = $.cookie("shopCar")
                // // cookie("id",)
                // // console.log(cookie)
                // if(!imgArr.indexOf(target)==-1){
                //     cookie("id".target.getAttribute("data-id"))
                //     window.location.href="detail.html";
                // }
                // if(!(cookie = $.cookie("shopCar"))){ 
                //     // $(".shopCar").find("span").html(0);
                //     // return 0;
                //     console.log(cookie)
                // };

              
                }

            
                         
              
})
var car = new ShopCar();
car.init();