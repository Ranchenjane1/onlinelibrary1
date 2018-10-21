function Pagination(){
}
Pagination.prototype.init = function(){
    // 选择;
    this.wrap = document.querySelector(".wrap ul");
    this.clientHeight = document.documentElement.clientHeight;
    // 一个开关避免高频词进行数据请求;
    this.loading = false;
    this.now_page = 0;
    this.loadJson()
    .then(function(json){
        this.data = json;
        this.total = Math.ceil(json.count / 5);
        this.renderPage();
    }.bind(this))

    this.handleEvent() 
}
Pagination.prototype.loadJson = function(){
    return new Promise(function(success,error){
        var xhr = new XMLHttpRequest();
        xhr.open("GET","url(https://list.mogujie.com/search)");
        xhr.send(null);
        xhr.onload = function(){
            if(xhr.status == 200){
                var json = typeof xhr.response == "string" ?JSON.parse(xhr.response) : xhr.response;
                success(json)
            }else{
                error("请求出错");
            }
        }
    })
}
Pagination.prototype.renderPage = function(){
    var list =  this.data.subjects;
    var html = "";
   
    for(var i = 5 * this.now_page ; i <= 5* this.now_page + 4; i ++){
        html += `
                <li>
                    <img src="${list[i].images.small}" alt="">
                    <p>${list[i].title}</p>
                  
              </li>`
    }
    this.wrap.innerHTML += html;
    this.loading = false;   
}
Pagination.prototype.handleEvent = function(){
    onscroll = this.load.bind(this)
}
Pagination.prototype.load = function(event){
    if(this.loading) return 0 ;

    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    var showHeight = scrollTop + this.clientHeight;
    var eleChildren = this.wrap.getElementsByTagName("li");
    var lastChildren = eleChildren[eleChildren.length - 1];
    var lastTop = lastChildren.offsetTop;
    if(lastTop <= showHeight){
        this.loading = true;
        this.now_page ++;  

        if(this.now_page > this.total){
            return 0;
        }

        this.renderPage();
    }
}   
var pagination = new Pagination();
pagination.init();
