var oBox = document.getElementById("box1");
var oWrapbox = document.getElementById("wrapbox")
var oSmallbox = document.getElementById("smallbox")
var oSmallimg = document.getElementById("smallimg")
var oBigpic = document.getElementById("bigpic");
var oBigimg = document.getElementById("bigimg")


oWrapbox.onmouseover = function(){
    oSmallbox.style.display = "block";
    oBigpic.style.display = "block";
};

	oWrapbox.onmouseout = function(){
		oSmallbox.style.display = "none";
        oBigpic.style.display = "none";
	}

	//滑动
	oWrapbox.onmousemove = function(evt){
		var e = evt || window.event
		var left = e.offsetX - oSmallbox.offsetWidth / 2;
		var top = e.offsetY - oSmallbox.offsetHeight / 2;
		//限制宽度
		if(left <= 0){
			left = 0
		}else if(left >= oWrapbox.offsetWidth - oSmallbox.offsetWidth){
			left = oWrapbox.offsetWidth - oSmallbox.offsetWidth
		}
		//限制高度
		if(top <= 0){
			top = 0
		}else if(top >=  oWrapbox.offsetHeight - oSmallbox.offsetHeight){
			top =  oWrapbox.offsetHeight - oSmallbox.offsetHeight

		}

		//设置样式
		oSmallbox.style.left = left + "px";
		oSmallbox.style.top = top + "px";

		oSmallbox.style.backgroundPosition= -left + "px "+ -top+"px";

		//计算比例
		var pX = left / (oWrapbox.offsetWidth -oSmallbox.offsetWidth);
		var pY = top / (oWrapbox.offsetHeight - oSmallbox.offsetHeight);

		//大图比例

		oBigimg.style.left = pX * (oBigpic.offsetWidth - oBigimg.offsetWidth) + "px";
		oBigimg.style.top = pY * (oBigpic.offsetHeight - oBigimg.offsetHeight) + "px";
	}