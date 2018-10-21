var oJ_r_top = document.getElementById("J_r_top")

    oJ_r_top.onclick = function(){
            if(document.body.scrollTop){
                document.body.scrollTop = 0
    
            }else{
                document.documentElement.scrollTop = 0
            }
            scrollTop = 0
        }