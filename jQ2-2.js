var key = JSON.parse(sessionStorage.getItem('key'));
$("#tp").html(Number($("#tp").html()+1));
$("#jh").html(Number($("#jh").html()+1));
var p=0
$("#ck").click(function(){
    $("#ck").css("display","none");
    $("#ck2").css("display","flex");
    $("#conent").css("backgroundImage","url(https://tianrandai2.github.io/tupian/65.png)");
    $("#shenfen").fadeIn();
    $("#text").fadeIn();
    $("#shenfen").html(key[p]);
    p++
    if(p===key.length){
        $("#ck").css("display","none");
        $("#ck2").css("display","none");
        $("#ck3").css("display","flex");
    }
})
$("#ck2").click(function(){
    $("#ck").css("display","flex");
    $("#ck2").css("display","none");
    $("#conent").css("backgroundImage","url(https://tianrandai2.github.io/tupian/67.png)");
    $("#shenfen").fadeOut();
    $("#text").fadeOut();
    $("#shenfen").html(key[p]);
    $("#tp").html(Number($("#tp").html())+1);
    $("#jh").html(Number($("#jh").html())+1);
    $("#jh2").html(Number($("#jh2").html())+1);
});
$("#ck3").click(function(){
    sessionStorage.setItem("key",JSON.stringify(key));
    window.location.href = "jQ3-1.html"
});
$(".left").click(function(){
   
    if(confirm("确定要退出游戏吗")){sessionStorage.clear();
        window.location.href = "jQ2-1.html"}
    
})
$(".right").click(function(){
   
    if(confirm("确定要退出游戏吗")){sessionStorage.clear();
        window.location.href = "jQ2-1.html"}
})