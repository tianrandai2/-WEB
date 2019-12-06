var key = JSON.parse(sessionStorage.getItem('key'));/*游戏玩家数组*/
var cun2 = JSON.parse(sessionStorage.getItem("cun2"));/*死亡人的身份*/
var death2 = JSON.parse(sessionStorage.getItem("death2"));/*死亡人的索引号*/
// 前一页游戏4个摁纽的颜色style颜色值
var k = sessionStorage.getItem("k");
console.log()
var k2 = sessionStorage.getItem("k2");
var k3 = sessionStorage.getItem("k3");
var k4 = sessionStorage.getItem("k4");
var y2 = JSON.parse(sessionStorage.getItem("y2"));/*前一页的计数器*/
// 添加元素
var add =[];
for(let i=0;i<key.length;i++){
    add[i] ='<div class="box">'+'<div class="box1"></div>'+'<div class="box2"></div>'+'<img src="24.png" alt="" class="imge2">'+'</div>'
    $("#main").append(add[i]);
    $(".box1").eq(i).html(key[i]);
    $(".box2").eq(i).html(i+1+'号');
    $(".box").eq(i).click(function(){
        console.log($(".imge2").eq(i).css("display"))
        if(cun2===null||cun2.length%2===0){
                 if($(".box1").eq(i).text()==="杀手"){
                     alert("杀手不能自杀")
                 }
                 else{
                     
                    if($(".box1").eq(i).css("background-color") === "rgb(255, 0, 0)"){
                        alert("此人已死")
                    }else{
                        if($(".imge2").eq(i).css("display")==="block"){
                            $(".imge2").eq(i).css("display","none");
                }else{
                    for(l=0;l<key.length;l++){
                        $(".imge2").eq(l).css("display","none");
                    }
                    $(".imge2").eq(i).css("display","block");
                }
                }
                 }
        }
        else{
        if( $(".box1").eq(i).css("background-color") === "rgb(255, 0, 0)"){
            alert("此人已死")
        }else{
            if($(".imge2").eq(i).css("display")==="block"){
                $(".imge2").eq(i).css("display","none");
    }else{
        for(l=0;l<key.length;l++){
            $(".imge2").eq(l).css("display","none");
        }
        $(".imge2").eq(i).css("display","block");
    }
    }
    }
    })
    }
    if(death2!==null){
        for(let u =0;u<death2.length;u++){
            $(".box1").eq([death2[u]]).css("background-color","red");
            $(".box2").eq([death2[u]]).css("background-color","red");
        }
    }
    let cun=[];
    $("#ded").click(function(){
     for(let b=0;b<key.length;b++){
         if( $(".imge2").eq(b).css("display")==="block"){
            $(".box1").eq(b).css("backgroundColor","red");
            $(".box1").eq(b).css("backgroundColor","red");;
            cun.push(key[b]);
            cun2!==null ? cun=cun2.concat(cun):null;
            var death =[]
           // 死亡的人的索引
           death.push(b)
           death2!==null ? death=death2.concat(death):null;
           // 杀手总人数
let killer = key.filter(function (index) {
    return index==="杀手";
});
// 平民总人数
let civilian = key.filter(function (index) {
    return index==="平民";
});
// 杀手死亡人数
let didkiller = cun.filter(function (index) {
    return index==="杀手";
});
// 平民死亡人数
let didcivilian = cun.filter(function (index){
    return index==="平民";
});
// 平民剩余人数
let Survivecivilian =civilian.length-didcivilian.length;
// 杀手剩余人数
let Survivekiller =killer.length-didkiller.length;
           sessionStorage.setItem("cun",JSON.stringify(cun));
           sessionStorage.setItem("k",k);
           sessionStorage.setItem("k2",k2);
           sessionStorage.setItem("k3",k3);
           sessionStorage.setItem("k4",k4);
           sessionStorage.setItem("death",JSON.stringify(death));
           sessionStorage.setItem("civilian",JSON.stringify(civilian));
           sessionStorage.setItem("killer",JSON.stringify(killer));
           sessionStorage.setItem("Survivecivilian",Survivecivilian);
           sessionStorage.setItem("Survivekiller",Survivekiller);
           if(Survivecivilian===Survivekiller){
            alert("杀手胜利")
            window.location.href = "https://tianrandai2.github.io/-WEB/jQ4-2.html";
           }else if(didkiller.length===killer.length){
               alert("平民胜利")
               window.location.href = "https://tianrandai2.github.io/-WEB/jQ4-2.html";
           }else {
            window.location.href = "https://tianrandai2.github.io/-WEB/jQ3-2.html";
           }
        }
    
   
    }
 })
 document.getElementsByTagName("img")[1].onclick=function(){
    if(confirm("确定要退出游戏吗")){sessionStorage.clear();
        window.location.href = "https://tianrandai2.github.io/-WEB/jQ2-1.html"}
 }