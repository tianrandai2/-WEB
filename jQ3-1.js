// 这些值这个页面没用，后面的页面有用
var key = JSON.parse(sessionStorage.getItem('key'));
var death = JSON.parse(sessionStorage.getItem('death2'));
var cun = JSON.parse(sessionStorage.getItem('cun'));
var k = sessionStorage.getItem('k');
var k2 = sessionStorage.getItem('k2');
var k3 = sessionStorage.getItem('k3');
var k4 = sessionStorage.getItem('k4');
// 先建立一个数组然后把要插入的内容放到数组里，再插入进去
var add =[];
for(var i=0;i<key.length;i++){
    add[i] ='<div class="box">'+'<div class="box1"></div>'+'<div class="box2"></div>'+'</div>'
    $("#main").append(add[i]);
    $(".box1").eq(i).html(key[i]);
    $(".box2").eq(i).html(i+1+'号');
    }
    // 点击摁纽时的设置，跳转下一个页面
    $("#fgym").click(function(){
    // 把值存进来后面的页面有用
    sessionStorage.setItem("key",JSON.stringify(key));
    sessionStorage.setItem("death",JSON.stringify(death));
    sessionStorage.setItem("cun",JSON.stringify(cun));
    sessionStorage.setItem("k",k)
    sessionStorage.setItem("k2",k2)
    sessionStorage.setItem("k3",k3)
    sessionStorage.setItem("k4",k4)
    window.location.href = "jQ3-2.html";
    });
    // 从后一个页面跳转回来时记录死亡的人数
    if(death!==null){
        for(var v=0;v<death.length;v++){
            $(".box1").eq(death[v]).css("background-color","red");
            $(".box2").eq(death[v]).css("background-color","red");
        }
     }
     $("img").eq(1).click(function(){
        if(confirm("确定要退出游戏吗")){sessionStorage.clear();
            window.location.href = "jQ2-1.html"}
     })