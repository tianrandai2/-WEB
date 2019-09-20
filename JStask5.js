let username= document.getElementsByName("name")[0];
let pwa = document.getElementsByName("pwa")[0];
let signin = document.getElementById("dl");
let tips = document.getElementById("ti");
username.onclick=function(){
    tips.innerHTML=""
}
pwa.onclick=function(){
    tips.innerHTML=""
}

signin.onclick=function(event){
    event.preventDefault();
    console.log(username.value)
    console.log(pwa.value)
    let data ="name="+username.value+"&pwd="+ pwa.value;
    console.log(data)
    let ajax = new XMLHttpRequest();
    ajax.open('POST','/carrots-admin-ajax/a/login', true);
    ajax.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
    ajax.onreadystatechange = function(){
        if(ajax.readyState==4 && ajax.status==200){
                let receive= JSON.parse(ajax.responseText);
                console.log(JSON.parse(ajax.responseText))
                console.log(receive.code)
                console.log(receive.message)
                if(receive.code!==0){
                    tips.innerHTML=receive.message
                }else{
                    window.location.href = "http://dev.admin.carrots.ptteng.com/";
                }

    }else if(ajax.status!==200){
        tips.innerHTML="暂时无法登陆"
    }
    }
    
    ajax.send(data);
}