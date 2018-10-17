function $(select){
    return document.getElementById(select);
}
var oUsername=$("username");
var oUse=$("use");
//console.log(oUsename);
oUsername.onblur=function(){
    var sUsername=oUsername.value;
    var regName=/^[\u4e00-\u9fa51-9a-zA-Z\-_]{4,20}$/;
    if(regName.test(sUsername)){
        oUse.innerHTML="用户名格式正确";
        oUse.style.color="green";
        oUsername.pass=true;
        
    }else{
        oUse.innerHTML="支持中文、英文、数字、_、-的组合，4-20个字符";
        oUse.style.color="red";
        oUsername.pass=false;
    }
}
var oPassword=$("password");
var oWord=$("word");
var rate=0;
oPassword.onblur=function(){
    var sPassword=oPassword.value;
    var regPwd=/^[a-zA-Z1-9\~\!\@\#\$\%\^\&\*\(\)\_\-\+\.\,\/\'\;\:\"]{6,20}$/;
    if(regPwd.test(sPassword)){
        if(/\d/g.test(sPassword)){
            rate=0; 
            rate++;
                          
        }
        if(/[a-zA-z]/g.test(sPassword)){
            rate++;               
        }    
        if(/[\~\!\@\#\$\%\^\&\*\(\)\_\-\+\.\,\/\'\;\:\"]/g.test(sPassword)){
            rate++;               
        }
        switch(rate){
            case 1:
            oWord.innerHTML="密码强度为弱";
            oWord.style.color="gold";
            break;
            case 2:
            oWord.innerHTML="密码强度为中";
            oWord.style.color="orange";
            break;
            case 3:
            oWord.innerHTML="密码强度为强";
            oWord.style.color="green";
            break;
            default : this.remove();
        }  
        oPassword.pass=true;
    }else{
        oPassword.pass=false;
        oWord.innerHTML="密码建议使用字母、数字和符号两种以上的组合，6-20个字符";
    }
}
var oTopass=$("topass");
var oPass=$("pass");
oTopass.onblur=function(){
    var sTopass=oTopass.value;
    var res=oPassword.value;
    if(sTopass==res){
        oPass.innerHTML="密码验证正确";
        oPass.style.color="green";
        oTopass.pass=true;
    }else{
        oPass.innerHTML="密码验证错误,请再次输入密码";
        oPass.style.color="red";
        oTopass.pass=false;
    }
}
var oEmail=$("email");
var oMail=$("mail");
oEmail.onblur=function(){
    var sEmail=oEmail.value;
    var regEmail=/^[0-9a-z][0-9a-z_]{5,19}@[0-9a-z]{2,6}\.[a-z]{2,5}$/;
    if(regEmail.test(sEmail)){
        oMail.innerHTML="验证完成，你可以使用该邮箱";
        oMail.style.color="green";
        oEmail.pass=true;
    }else{
        oMail.innerHTML="验证不成功，请重新输入";
        oMail.style.color="red";
        oEmail.pass=false;
    }
}
var oEmailCard=$("emailCard");
var oMa=$("ma");
oEmailCard.onfocus=function(){
    var arr=[0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];
    var txt="";
    for(var i=0;i<4;i++){
        var res=arr[parseInt(Math.random()*arr.length)];
        txt+=res;
    }
    oMa.innerHTML=txt;
}
var oBtn=$("btn");
oBtn.onclick=function(){
    var url="php/register.php";
    ajaxPost(url,`username=${oUsername.value}&password=${oPassword.value}&email=${oEmail.value}`)
    .then(function(res){
        console.log(res);
    });
}