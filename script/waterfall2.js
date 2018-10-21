function WaterFall(){}
$.extend(WaterFall.prototype,{
    init:function(){
        // 页数；
        this.page = 1;
        // 结构外包围；
        this.main = $(".wrap ul");
        // 是否在加载中
        //console.log(this.main)
        this.loading = false;
        // 调用核心元素；
        this.loadJson()
        .done(function(res){
            // deferred 的 done 回调 this 指向的都是jquery 对象本身
            // console.log(res,this);
            this.renderPage(res);
            
        })
        this.bindEvent()
    },
    // 加载数据
    loadJson:function(){
        var opt = {
            url:"https://list.mogujie.com/search",
            dataType:"jsonp",
            data:{page:this.page},
            // this => 指向实例化对象；
            context:this
        }
        return $.ajax(opt);
    },
    // 渲染页面
    renderPage:function(json1){
        // console.log(json);
        var json=json1.result.wall.list;
        console.log(json)
        var html = "";
        for(var i = 0; i < json.length; i++){
          html += `<li class ="box">
          <a href="#">
            <img src = "${json[i].show.img}" data-id="${i}" alt="">
            <p>${json[i].title}</p>
            <div><span>${json[i].price}</span>
            <b>${json[i].orgPrice}</b>
            </div>
            <strong>加入购物车</strong>
           </a>
            </li>
          `  
        }
        //console.log(this.main)
        this.main.html(this.main.html() + html);

    },
    bindEvent(){
        $(window).on("scroll",this.ifLoad.bind(this));
    },
    ifLoad(){
        // console.log(1);
        // scrollTop;
        // 最后一张图片；
        // 当前屏幕的高度；
        var scrollTop = $("html,body").scrollTop();
        var clientHeight = $("html")[0].clientHeight;
        var lastBox = this.main.children(":last");
        // console.log(scrollTop,clientHeight,lastBox);
        // console.log(lastBox)
        if(scrollTop + clientHeight > lastBox.offset().top){
            // 加载数据；
            if(this.loading){
                return 0;
            }
            this.loading = true;
            // console.log("加载");
            this.page++;
            this.loadJson()
            .done(function(res){
                // deferred 的 done 回调 this指向的都是 jquery 对象本身
                // console.log(res,this);
                this.renderPage(res);
            })
        }
    }

})
var waterfall  = new WaterFall();
waterfall.init();