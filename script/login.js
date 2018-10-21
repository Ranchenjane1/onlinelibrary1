var oBtn = document.getElementById("btnlogin");
var oUser = document.getElementById("username");
var oPwd = document.getElementById("password");
oBtn.onclick = function(){
    var url = `http://localhost:8080/proxy/localhost/php/login.php?username=${oUser.value}&password=${oPwd.value}`;
    ajaxGet(url)
    .then(function(res){
        console.log(res);
    })
}