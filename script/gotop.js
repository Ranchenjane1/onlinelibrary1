var oJ_r_top = document.getElementById("J_r_top")
	// window.onscroll = function(){
	// 	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
	// 	if(scrollTop >= 2000){
	// 		oDiv.style.display = "block"
	// 		}
	// 	if(scrollTop < 2000){
	// 		oDiv.style.display = "none"
    //     }
    // }
    oJ_r_top.onclick = function(){
            if(document.body.scrollTop){
                document.body.scrollTop = 0
    
            }else{
                document.documentElement.scrollTop = 0
            }
            scrollTop = 0
        }