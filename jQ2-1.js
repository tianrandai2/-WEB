// 输入框输入数字的情况和滑轮的关系

$("#text").bind('input propertychange',function(){
    if(!isNaN(Number($(this).val()))){
        if( $(this).val()<4|| $(this).val() > 18){
            alert("玩家数量输入错误");
            $(this).val("4")
             $("#range").val($(this).val());
             killcivilian()
        }else{
            $("#range").val($(this).val());
            killcivilian()
        }
    }else{
        $(this).val("4") 
    }
   
});
// 加号控制滑轮
$("#jia").click(function(){
    $("#range").val(  Number($("#range").val())+1)
    $("#text").val(  Number($("#text").val())+1)
    if($("#text").val()>18){
        alert("不能大于18人")
    }
    $("#text").val($("#range").val());
    killcivilian()
})
// 减号控制滑轮
$("#jian").click(function(){
    $("#range").val(  Number($("#range").val())-1)
    $("#text").val(  Number($("#text").val())-1)
    if($("#text").val()<4){
        alert("不能小于4人")
    }
    $("#text").val($("#range").val());
    killcivilian()
})

// 滑轮与输入框的关系
$("#range").bind('input propertychange',function(){
    $("#text").val($("#range").val());
    killcivilian()
})
// 改变滑轮和输入框的value来控制杀手和平民的人数
function killcivilian(){
    if($("#text").val()<=7){
       $("#kill").html(1);
       $("#civilian").html($("#text").val()-$("#kill").html());
    }else if($("#text").val()<=11){
        $("#kill").html(2);
        civilian.innerHTML=text.value-kill.innerHTML;
    }else if($("#text").val()<=13){
        $("#kill").html(3);
        $("#civilian").html($("#text").val()-$("#kill").html());
    }else if($("#text").val()<=15){
        $("#kill").html(4);
        $("#civilian").html($("#text").val()-$("#kill").html());
    }else if($("#text").val()<=18){
        $("#kill").html(5);
        $("#civilian").html($("#text").val()-$("#kill").html());
    }
    var y=7*(Number($("#range").val())-4);
    $("#gbys").css("width",y+"%")
}






// 洗牌算法
function xipai(){
    var civilianvalue = $("#text").val()-$("#kill").html();
    var killvalue =$("#text").val()-$("#civilian").html();
    var killer =new Array(killvalue).fill("杀手");
    var civilianer =new Array(civilianvalue).fill("平民");
    var array = killer.concat(civilianer);
    console.log(array)
    for(i = array.length;i--;){
        var j = Math.floor(Math.random()*array.length);
        var b =array[i];
        array[i] = array[j];
        array[j] =b;
    }
    console.log(array);
    return array;
}
$("#fp").click(function(){
    xipai()
    sessionStorage.setItem("key",JSON.stringify(xipai()));
    　  window.location.href = "jQ2-2.html"
});