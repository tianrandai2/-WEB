import { Component, OnInit } from '@angular/core';
import {Router,NavigationEnd,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-backstage2',
  templateUrl: './backstage2.component.html',
  styleUrls: ['./backstage2.component.scss']
})
export class Backstage2Component implements OnInit {
  user:string;
  identity:string;
  detalist_list:any=[{name:'后台管理',list:[{title:'模块管理',route:'/path',biography:'12345'},{title:'角色管理',route:'/bath',biography:'54321'},{title:'密码修改',route:'/cath',biography:'898874'},{title:'账户修改',route:'/sath',biography:'565987'}]},
  {name:'Article管理',list:[{title:'Article详情',route:'/Backstage2/Article',biography:'12345'}],},
  {name:'内容管理',list:[{title:'公司列表',route:'/asdc',biography:'lkoji'},{title:'职位列表',route:'/poiu',biography:'18974236'}]}];
  
 
  constructor(private router:Router,private url:ActivatedRoute) { }

  ngOnInit() {
    var response = JSON.parse(sessionStorage.getItem("response"));/*接收后台传过来的数据*/
     this.user=  response.data.manager.name;
     this.identity=response.data.role.name;
     this.url.params.subscribe((data:any)=>{
      console.log(data)
     })
     
     let Welcome:any =document.getElementsByClassName('Welcome')[0]
    //  this.router.events.subscribe((event)=>{
    //    if(event instanceof NavigationEnd){
    //      if (event.url!=="/Backstage2"){
    //         Welcome.style.display='none'
    //         console.log(event.url)
    //      }else{
    //        console.log(event.url)
    //        Welcome.style.display='block'
    //      }
    //    }
    //  })
    if(window.location.pathname==='/Backstage2'){
      Welcome.style.display='block'
      sessionStorage.removeItem("page");
      sessionStorage.removeItem("size");
      sessionStorage.removeItem("release_time");
      sessionStorage.removeItem("modification_time");
      sessionStorage.removeItem("onevalue");
      sessionStorage.removeItem("twovalue");
      sessionStorage.removeItem("q");
      sessionStorage.removeItem("p");

    }else{
      Welcome.style.display='none'
    }
    console.log(1)
  }
  ngAfterViewInit(): void {
    
    let display_list:any=document.getElementsByClassName('display_list');
    let hidden_list_box:any=document.getElementsByClassName('hidden_list_box');
    let lcon:any=document.getElementsByClassName('lcon');
    for(let i=0;i<display_list.length;i++){
      display_list[i].onclick=function(event){
        event.stopPropagation()/*取消冒泡事件*/
        if(lcon[i].style.transform==='rotate(-45deg)'){
          hidden_list_box[i].classList.remove("display_box");
          lcon[i].style.transform='rotate(45deg)';
          display_list[i].style.background='';
        }else{
          for(let y=0;y<hidden_list_box.length;y++){
            hidden_list_box[y].classList.remove("display_box");
            lcon[y].style.transform='rotate(45deg)';
           display_list[y].style.background='';
           }
           hidden_list_box[i].classList.add("display_box");
          lcon[i].style.transform='rotate(-45deg)';
          display_list[i].style.background='rgb(58, 56, 56)';
        } 
      }
    }
    let Explicit:any= document.getElementsByClassName('main_left')[0];
   window.onresize=function(){
     if(window.innerWidth>768){
      if(Explicit.style.maxHeight=='280px'){
        Explicit.style.maxHeight='none'
       }
     }else{
      if(Explicit.style.maxHeight=='none'){
        Explicit.style.maxHeight='280px'
      }
     }
   }
  }
  list(){
 let Explicit:any= document.getElementsByClassName('main_left')[0];
 if(Explicit.style.maxHeight!=='280px'){
  Explicit.style.maxHeight='280px';
 }else{
  Explicit.style.maxHeight=''
 }
 }
}