var a =  document.getElementsByClassName("one");
var bone = document.getElementById("b-one");
var btwo = document.getElementById("b-two");
var animation;
function array() {
function ran()
{
     
            var m = Math.random() * 9;
           m = Math.floor(m);
            return m;
}
var n1=ran();
var n2=ran();
var n3=ran();
if(n1 == n2 ){
    n1=ran()
} else if(n2 == n3){
    n2=ran()
}else if(n3 == n1){
    n3=ran();
}
function color1(){
    function yanse()
   {
        
               var l = Math.random() * 255;
              l = Math.floor(l);
               return l;
   }
   var v1=yanse();
   var v2=yanse();
   var v3=yanse();
   var x ='('+ v1 +','+ v2 +','+ v3 +')';
   return x;
   }
   
   a [n1].style.backgroundColor = 'rgb'+ color1();
   a [n2].style.backgroundColor = 'rgb'+ color1();
   a [n3].style.backgroundColor = 'rgb'+ color1();
   }
bone.onclick = function btop(){
    animation = setInterval(function(){
            a [0].style.backgroundColor = 'gold';
            a [1].style.backgroundColor = 'gold';
            a [2].style.backgroundColor = 'gold';
            a [3].style.backgroundColor = 'gold';
            a [4].style.backgroundColor = 'gold';
            a [5].style.backgroundColor = 'gold';
            a [6].style.backgroundColor = 'gold';
            a [7].style.backgroundColor = 'gold';
            a [8].style.backgroundColor = 'gold';
            array();
    },1000);
    

}
btwo.onclick = function btop2(){
    clearInterval( animation); 
    a [0].style.backgroundColor = 'gold';
    a [1].style.backgroundColor = 'gold';
    a [2].style.backgroundColor = 'gold';
    a [3].style.backgroundColor = 'gold';
    a [4].style.backgroundColor = 'gold';
    a [5].style.backgroundColor = 'gold';
    a [6].style.backgroundColor = 'gold';
    a [7].style.backgroundColor = 'gold';
    a [8].style.backgroundColor = 'gold';
   }   
   