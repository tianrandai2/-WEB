var key = JSON.parse(sessionStorage.getItem('key'));/*游戏总人数的数组 */
sessionStorage.setItem("key",JSON.stringify(key));
var cun = JSON.parse(sessionStorage.getItem('cun'));/*死亡的人身份*/
var death = JSON.parse(sessionStorage.getItem('death'));/*死亡人的索引*/
// 四个游戏摁纽的颜色，没存储过都是空值。
var k = sessionStorage.getItem('k');
var k2 = sessionStorage.getItem('k2');
var k3 = sessionStorage.getItem('k3');
var k4 = sessionStorage.getItem('k4');
/*计数器，用来计算插入的天数的与下面的y一样，因为是先提取后存储，所以第一次提取时y2是null，所以要设置
个判断，y2等于null时y要等于0*/
var y2 = JSON.parse(sessionStorage.getItem('y2'));
if(y2!==null){
    var y =y2
}else{
        var y=[0]
    }
    // 设置个插入数组
    add2=[]
for(var p=0;p<y.length;p++){
add2[p]='<div class="data"></div>'+'<div class="centent" id="centent">'+' <div class="Killing">凶手杀人<div style="position: relative"><div class="sj"></div></div></div>'+' <div style="position: relative"><div class="hei"></div></div>'+'<div style="position: relative"><div class="bai"></div></div>'+' <div class="sw">号被凶手杀死，死者身份是</div>'+'<div class="lastwords">亡灵发表遗言<div style="position: relative"><div class="sj"></div></div></div>'+'<div class="speak" >玩家依次发言<div style="position: relative"><div class="sj"></div></div></div>'+'<div class="vote">大家投票<div style="position: relative"><div class="sj"></div></div></div>'+'</div>';
 $("#main").append(add2[p]);
 $(".data").eq(p).html('第'+Number(p+1)+"天");
//  k这些值先提取后存储，所以是空值，使中间的4个游戏摁纽style暂时是字符串
$(".Killing").eq(p).css("background-color",k);
 $(".lastwords").eq(p).css("background-color",k2);
 $(".speak").eq(p).css("background-color",k3);
 $(".vote").eq(p).css("background-color",k4);
//  data[p].innerHTML='第'+Number(p+1)+"天";
//  killing[p].style.backgroundColor= k;
//  lastwords[p].style.backgroundColor= k2;
//  speak[p].style.backgroundColor= k3;
//  vote[p].style.backgroundColor= k4;
}
$(".centent").eq(y.length-1).css("display","block");
// 游戏四个摁纽函数
// 凶手杀人摁纽
$(".Killing").eq(y.length-1).click(function(){
    if($(".Killing").eq(y.length-1).css("background-color")==="rgb(36, 167, 198)"){
        alert("天黑请闭眼");
        $(".Killing").eq(y.length-1).css("background-color","rgb(128, 128, 128)");
        var k =$(".Killing").eq(y.length-1).css("background-color");
      sessionStorage.setItem("k",k)
        if(cun!==null){
        sessionStorage.setItem("cun2",JSON.stringify(cun));
        sessionStorage.setItem("death2",JSON.stringify(death));
    }
         window.location.href = "https://tianrandai2.github.io/-WEB/jQ4-1.html"}else{
            alert("请正确游戏")
        }
});
// 死者身份显示
if($(".Killing").eq(y.length-1).css("background-color") === "rgb(128, 128, 128)"){
    $(".sw").eq(y.length-1).css("display","block");
    $(".sw").eq(y.length-1).text(death[cun.length-1]+1+"号被凶手杀死，死者身份是"+cun[cun.length-1])
}else{
    $(".sw").eq(y.length-1).css("display","none");
};
// 遗言摁纽
$(".lastwords").eq(y.length-1).click(function(){
    if($(".lastwords").eq(y.length-1).css("background-color")==="rgb(36, 167, 198)"){
    if($(".Killing").eq(y.length-1).css("background-color") === "rgb(128, 128, 128)"){
        alert("xx是凶手");
     $(".lastwords").eq(y.length-1).css("background-color","rgb(128, 128, 128)");
     var k2 = $(".lastwords").eq(y.length-1).css("background-color")
     sessionStorage.setItem("k2",k2)
    }else{
        alert("请正确游戏");
    }
}else{
    alert("请正确游戏");
}
})
// 大家发言摁纽
$(".speak").eq(y.length-1).click(function(){
    if($(".speak").eq(y.length-1).css("background-color")==="rgb(36, 167, 198)"){
        if($(".lastwords").eq(y.length-1).css("background-color") === "rgb(128, 128, 128)"){
            $(".speak").eq(y.length-1).css("background-color","rgb(128, 128, 128)");
            var k3= $(".speak").eq(y.length-1).css("background-color");
            alert("xx是凶手");
            sessionStorage.setItem("k3",k3)
        }else{
            alert("请正确游戏");
        }
    }else{
        alert("请正确游戏");
    }
});
// 投票摁纽
$(".vote").eq(y.length-1).click(function(){
    if($(".vote").eq(y.length-1).css("background-color")==="rgb(36, 167, 198)"){
if($(".speak").eq(y.length-1).css("background-color") === "rgb(128, 128, 128)"){
    $(".vote").eq(y.length-1).css("background-color","rgb(128, 128, 128)")
    sessionStorage.setItem("cun2",JSON.stringify(cun));
    sessionStorage.setItem("death2",JSON.stringify(death));
    k="";k2="";k3="";k4=""
    sessionStorage.setItem("k",k)
    sessionStorage.setItem("k2",k2)
    sessionStorage.setItem("k3",k3)
    sessionStorage.setItem("k4",k4)
    y.push(1)
    sessionStorage.setItem("y2",JSON.stringify(y));
    window.location.href = "https://tianrandai2.github.io/-WEB/jQ4-1.html";
}else{
    alert("请正确游戏");
}
    }else{
        alert("请正确游戏");
    }
});
// 抽屉效果
for(let r=0;r<$(".data").length;r++){
    $(".data").eq(r).click(function(){
            $(".centent").eq(r).slideToggle(2000); 
})
}
// 让所有之前点击过的摁纽变黑
for(var p2 = 0;p2<y.length-1;p2++){
    $(".Killing").eq(p2).css("background-color","gray");
   $(".lastwords").eq(p2).css("background-color","gray");
   $(".speak").eq(p2).css("background-color","gray");
   $(".vote").eq(p2).css("background-color","gray");
     var v =cun.slice();
     v= v.reverse()
     $(".sw").eq(p2).text(death[p2]+1+"号被凶手杀死，死者身份是"+v[v.length-1]);
    };

    $("#faguanrzhi").click(function(){
        sessionStorage.setItem("death2",JSON.stringify(death));
        sessionStorage.setItem("cun",JSON.stringify(cun));
        sessionStorage.setItem("k",k)
        window.location.href = "jQ3-1.html";
    })
    $(".right").eq(0).click(function(){
        if(confirm("确定要退出游戏吗")){sessionStorage.clear();
            window.location.href = "https://tianrandai2.github.io/-WEB/jQ2-1.html"}
    })
    $(".left").eq(0).click(function(){
        sessionStorage.setItem("death2",JSON.stringify(death));
        sessionStorage.setItem("cun",JSON.stringify(cun));
        sessionStorage.setItem("k",k)
        window.location.href = "https://tianrandai2.github.io/-WEB/jQ3-1.html";
    })