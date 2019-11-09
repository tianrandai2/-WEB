import { Component,OnInit } from '@angular/core';
import {Router,NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task6-task10';
  constructor(private router:Router){};

  ngOnInit(){
    /*通过监听事件看看路由跳转到了哪个页面，如果是登录页面就设置背景图片*/ 
    let ba =document.body
    
    this.router.events.subscribe((event)=>{
      if(event instanceof NavigationEnd){
        if (event.url=="/Login"||event.url=="/"){
         ba.style.backgroundImage=' url(assets/imge/66.jpg)'
        } else{
          ba.style.backgroundImage=null
        }
      }
    })
    
  }
  ngAfterViewInit(): void {
    let display_list:any=document.getElementsByClassName('display_list');
    window.onclick=function(){
      for(let y=0;y<display_list.length;y++){
        display_list[y].style.background='';
      }
   }
  }
}
