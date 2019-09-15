var cun2 = JSON.parse(sessionStorage.getItem('cun'));
console.log(cun2);
var colonecun2=cun2.slice()
console.log(colonecun2)
var death2 = JSON.parse(sessionStorage.getItem('death'));
console.log(death2);
var colonedeath2=death2.slice();
console.log( colonedeath2);
var civilian = JSON.parse(sessionStorage.getItem('civilian'));
console.log(civilian);
var killer = JSON.parse(sessionStorage.getItem('killer'));
console.log(killer);
var Survivecivilian = sessionStorage.getItem('Survivecivilian');
console.log(Survivecivilian);
var Survivekiller = sessionStorage.getItem('Survivekiller');
console.log(Survivekiller);
var death=[];
var dat=[]
var baitian =[];
var wanshang =[]
for(var s=0;s<cun2.length;s++){
    if(s%2===1){
        baitian.push( colonedeath2[s]);
        dat.push(colonecun2[s]);
    }else{
        
        death.push(colonecun2[s]);
        wanshang.push( colonedeath2[s]);
    }
}
console.log(death);
console.log(wanshang);
console.log(baitian);
console.log( dat);
var biao =[]
for(let v=0;v<cun2.length/2;v++){
    var h =Number(death2[v])+1;
    biao[v]='<li>'+' <p class="tian"></p>'+'<div class="div5"></div>'+'<div class="bai"></div>'+' <div class="div6">0小时07分</div>'+'</li>'
    $("#list").append(biao[v]);
    $(".tian").eq(v).text("第"+(v+1)+"天");
    $(".div5").eq(v).text("晚上"+Number(wanshang[v]+1) +"号被杀手杀死,"+Number(wanshang[v]+1)+"号是"+death[v]);
    if(baitian.length!==0){
            $(".bai").eq(v).text("白天"+Number(baitian[v]+1)+"号被杀手杀死,"+Number(baitian[v]+1)+"号是"+dat[v]);
}
};
if(baitian.length!==wanshang.length){
   ($(".bai").eq(wanshang.length-1)).remove();
}
$("#result").text("本轮游戏剩余凶手"+Survivekiller+"人，共经历了"+dat.length+"个白天，在杀人游戏中击败了67%的玩家！");
$("#sha").text("杀 手"+ killer.length+"人");
$("#min").text("平 民"+ civilian.length+"人");
$("#shang").click(function(){
sessionStorage.clear();
window.location.href = "jQ2-1.html";
})