import { Component, OnInit,ViewChild } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ServiceService } from '../../../services/service.service';
import { Router,NavigationExtras } from '@angular/router';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
 
export class ArticleComponent implements OnInit {

one:any={
      value:'全部',
      op:['全部',0,1,2,3]
}
two:any={
  value:'全部',
  op:['全部',1,2]
}
data:any;/*展示的数据*/
paging:any=[];/*分页页数*/
p:string='';/*后台数据接口*/
page:any;/*页数*/
size :any;/*每页的展示条数*/
myxs:string='';/*输入框每页展示的条数*/
djy:string='';/*输入框第几页*/
total:any;/*返回的数据总数*/
release_time:any;/*开始时间*/
modification_time:any;/*结束时间*/
release_time_getTime:any;/*开始时间时间戳*/
modification_time_getTime:any/*结束时间时间戳*/
Passvalue:any;/*父组件传递给子组件的值*/
bloor:any=false;/*弹窗组件的隐藏与显示*/
key:any;/*列表传递的索引值*/
@ViewChild('popup',{static:false})box:any;
bl:any;
  constructor(private aa:ActivatedRoute,public service:ServiceService,public router:Router,public http:HttpClient) { }
   
  ngOnInit() {
   let lastnamepage = sessionStorage.getItem("page");
   let lastnamesize =sessionStorage.getItem("size");
   let release_time = sessionStorage.getItem("release_time");
   let modification_time =sessionStorage.getItem("modification_time");
   let onevalue = sessionStorage.getItem("onevalue");
   let twovalue =sessionStorage.getItem("twovalue");
   let Passvalue=sessionStorage.getItem("Passvalue");
   let p = sessionStorage.getItem("p");
   let q2 =JSON. parse(sessionStorage.getItem("q"));
  console.log(lastnamepage)
  console.log(lastnamesize)
  console.log(release_time)
  console.log(modification_time)
  console.log( onevalue)
  console.log(twovalue)
  console.log( p)
  console.log(q2 )
  console.log(Passvalue)
    if(Passvalue!=null&&Passvalue!=''&&Number(Passvalue)!=NaN){
      this.bloor=true
      this.Passvalue=Passvalue
      sessionStorage.removeItem("Passvalue");
    }
 
  

    
    if(lastnamepage===null){
      this.page=1;/*展示的页数*/
      this.size=10;/*每页展示的条数*/
      this.myxs=this.size;
      this.djy=this.page;
      let q:NavigationExtras={queryParams:{
        page:this.page,
        size:this.size,
      }}

      this.router.navigate(['/Backstage2/Article'],q)
      this.p='/a/article/search?page='+this.page+'&size='+this.size;

      // 接收返回的数据
      this.service.getqingqiu(this.p).then((response:any)=>{
      this.data=response.data;
      this.paging=response.paging;
      this.total=response.total;
      console.log(this.data)
      });
      console.log(1)
    }else{
      this.page= Number(lastnamepage) ;
      this.size= Number(lastnamesize) ;
      this.myxs=this.size;
      if(q2!==null){
        this.release_time=release_time;
        this.modification_time=modification_time;
        console.log(this.release_time);
        console.log(this.modification_time);
        this.one.value=onevalue;
        this.two.value=twovalue;
        this.p=p;
        this.router.navigate(['/Backstage2/Article'],q2);
        this.service.getqingqiu(this.p).then((response:any)=>{
          this.data=response.data;
          this.paging=response.paging;
          this.total=response.total;
          })
      }else{
         let q:NavigationExtras={queryParams:{
      page:this.page,
      size:this.size,
    }}
    this.router.navigate(['/Backstage2/Article'],q)
    this.p='/a/article/search?page='+this.page+'&size='+this.size;
      }
          // 接收返回的数据
    this.service.getqingqiu(this.p).then((response:any)=>{
    this.data=response.data;
    this.paging=response.paging;
    this.total=response.total;
    
    })
    }
  //  this.myxs=this.size;
  //  this.djy=this.page;
    // 跳转是路由显示页数和条数
  // if(window.location.search.indexOf('startAt')===-1){
  //   this.router.navigate(['/Backstage2/Article'],{queryParams:{
  //     page:this.page,
  //     size:this.size
  //   }})
   

  //   //  后台数据接口

    // let q:NavigationExtras={queryParams:{
    //   page:this.page,
    //   size:this.size,
    // }}
    // this.router.navigate(['/Backstage2/Article'],q)
    // this.p='/a/article/search?page='+this.page+'&size='+this.size;


 
   
    // 接收返回的数据
    // this.service.getqingqiu(this.p).then((response:any)=>{
    // this.data=response.data;
    // this.paging=response.paging;
    // this.total=response.total;
    // })
  
  }
  
  ngAfterViewInit(): void {
     let wthis:any=this
    //  let message = sessionStorage.getItem("message");
    //  let message2 =sessionStorage.getItem("message2");
    //  setTimeout(function(){
    //   if(message!==null){
    //     alert('上线成功')
    //     sessionStorage.removeItem("message");
        
    //   }
    //   if(message2!==null){
    //    alert('下线成功')
    //    sessionStorage.removeItem("message2");
    //   }
    //  },1000)
    
      // 前一页后一页的显示与隐藏监控url变化
    //    this.router.events.subscribe((event)=>{
    //    if(event instanceof NavigationEnd){
    //     if(this.page==1||this.page==''){
    //       document.getElementById('next').style.display='none';
    //       document.getElementById('after').style.display='inline';
    //     }else if(this.page==this.paging.length){
    //       document.getElementById('after').style.display='none';
    //       document.getElementById('next').style.display='inline';
    //     }else{
    //       document.getElementById('next').style.display='inline';
    //       document.getElementById('after').style.display='inline';
    //     }
    //     if(this.size===this.total){
    //       document.getElementById('next').style.display='none';
    //       document.getElementById('after').style.display='none';
    //      }
    //    }
    //  })


    // 开始的欢迎标语
    let Welcome:any =document.getElementsByClassName('Welcome')[0];
    if(window.location.pathname==='/Backstage2'){
      Welcome.style.display='block'
    }else{
      Welcome.style.display='none'
    }


      // 首页和尾页
    // let firstandLastPage:any=document.getElementsByClassName('page1')
    // for(let v =0;v<firstandLastPage.length-1;v++){
    //   firstandLastPage[v].onclick=function(){
    //     let q2 =JSON. parse(sessionStorage.getItem("q"));
    //     let p = sessionStorage.getItem("p");
    //     if(v===0){
    //       wthis.page=1;
    //       wthis.size=Number(wthis.myxs);
    //       sessionStorage.setItem("page", wthis.page);
    //       sessionStorage.setItem("size", wthis.size);
    //       if(q2===null){
    //       wthis.p='/a/article/search?page='+wthis.page+'&size='+wthis.size
    //       wthis.router.navigate(['/Backstage2/Article'],{queryParams:{
    //         page:wthis.page,
    //         size:wthis.size
    //       }})
    //       wthis.service.getqingqiu(wthis.p).then((response:any)=>{
    //         console.log(response)
    //         wthis.data=response.data
    //         wthis.paging=response.paging
    //       })
    //     }else{
    //       let b =p.indexOf('&',25)/*第二个字符串&的索引值*/
    //       let c =p.substr(b);/*截取第二个&及往后的字符串*/
    //       wthis.p='/a/article/search?page='+wthis.page+'&size='+wthis.size+c;
    //       sessionStorage.setItem("p", this.p);
    //       sessionStorage.setItem("q",  JSON.stringify(q2));
    //       wthis.router.navigate(['/Backstage2/Article'],q2);
    //       wthis.service.getqingqiu(wthis.p).then((response:any)=>{
    //         console.log(response)
    //         wthis.data=response.data
    //         wthis.paging=response.paging
    //       })
    //     }
    //     }else if(v===1){
    //       wthis.size=Number(wthis.myxs);
    //       if(wthis.size===''||wthis.size==0){
    //         wthis.size=10
    //       }
    //       let pageCount:any=Math.ceil(wthis.total/wthis.size)
    //       wthis.paging.length=pageCount;
    //       wthis.page=wthis.paging.length;
    //       sessionStorage.setItem("page", wthis.page);
    //       sessionStorage.setItem("size", wthis.size);
    //       if(q2===null){
    //       wthis.p='/a/article/search?page='+wthis.page+'&size='+wthis.size
    //       wthis.router.navigate(['/Backstage2/Article'],{queryParams:{
    //         page:wthis.page,
    //         size:wthis.size
    //       }})
    //       wthis.service.getqingqiu(wthis.p).then((response:any)=>{
    //         console.log(response)
    //         wthis.data=response.data
    //         wthis.paging=response.paging
    //       })
    //       console.log(wthis.p)
    //     }else{
    //       let b =p.indexOf('&',25)/*第二个字符串&的索引值*/
    //       let c =p.substr(b);/*截取第二个&及往后的字符串*/
    //       wthis.p='/a/article/search?page='+wthis.page+'&size='+wthis.size+c;
    //       sessionStorage.setItem("p", this.p);
    //       sessionStorage.setItem("q",  JSON.stringify(q2));
    //       wthis.router.navigate(['/Backstage2/Article'],q2);
    //       wthis.service.getqingqiu(wthis.p).then((response:any)=>{
    //         console.log(response)
    //         wthis.data=response.data
    //         wthis.paging=response.paging
    //       })
    //     }
    //     }
    //   }
    // }
    // 前一页
  // document.getElementById('next').onclick=function(){
  //   wthis.page= wthis.page-1;
  //   wthis.size= wthis.myxs;
  //   sessionStorage.setItem("page", wthis.page);
  //   wthis.p='/a/article/search?page='+wthis.page+'&size='+wthis.size
  //   wthis.router.navigate(['/Backstage2/Article'],{queryParams:{
  //     page:wthis.page,
  //     size:wthis.size
  //   }})
  //   wthis.service.getqingqiu(wthis.p).then((response:any)=>{
  //     console.log(response)
  //     wthis.data=response.data
  //     wthis.paging=response.paging
  //   })
  // }
    // 后一页
  // document.getElementById('after').onclick=function(){
  //   if(wthis.page==0||wthis.page==''){
  //     wthis.page=1
  //   }
  //   wthis.page= wthis.page+1;
  //   wthis.size= wthis.myxs;
  //   if(wthis.size===''||wthis.size==0){
  //     wthis.size=10
  //   }
  //   let pageCount:any=Math.ceil(wthis.total/wthis.size)
  //   wthis.paging.length=pageCount
  //   sessionStorage.setItem("page", wthis.page);
  //   wthis.p='/a/article/search?page='+wthis.page+'&size='+wthis.size
  //   wthis.router.navigate(['/Backstage2/Article'],{queryParams:{
  //     page:wthis.page,
  //     size:wthis.size
  //   }})
  //   wthis.service.getqingqiu(wthis.p).then((response:any)=>{
  //     console.log(response)
  //     wthis.data=response.data
  //     wthis.paging=response.paging
  //   })
  // }
  //  输入框每页展示的条数
 let myxs:any=document.getElementById('myxs');
    myxs.oninput=function(){
    if( isNaN(wthis.myxs)===true){
      wthis.myxs='';
    }
 }
// 展示的页数
 let djy:any=document.getElementById('djy');
    djy.oninput=function(){
    if( isNaN(wthis.djy)===true ){
      wthis.djy=''
    }
    if(Number(wthis.djy)>wthis.paging.length){
      wthis.djy=''
    }
 }
  }
  
  determine(){
    let q2 =JSON. parse(sessionStorage.getItem("q"));
    let p = sessionStorage.getItem("p");
   
    if(Number(this.myxs)!==0&&this.myxs!==''){
      this.size= Number(this.myxs);/*每页展示的条数*/
    }else{
      this.size=10
      this.myxs='10'
    }
    let pageCount:any=Math.ceil(this.total/this.size)
    this.paging.length=pageCount
    if(Number(this.djy)>pageCount){
      this.page=pageCount
      this.djy=pageCount
    }else{
      this.page=Number(this.djy) ;/*展示的页数*/
    }
    if(Number(this.djy)===0||this.djy==''){
      this.djy='1';
      this.page=1
    }
    sessionStorage.setItem("page", this.page);
    sessionStorage.setItem("size", this.size);
    if(q2===null){
    // 跳转是路由显示页数和条数
    this.router.navigate(['/Backstage2/Article'],{queryParams:{
      page:this.page,
      size:this.size
    }})
    //  后台数据接口
   this.p='/a/article/search?page='+this.page+'&size='+this.size
    // 接收返回的数据
    this.service.getqingqiu(this.p).then((response:any)=>{
    this.data=response.data
    this.paging=response.paging
    })
  }else{
    let b =p.indexOf('&',25)/*第二个字符串&的索引值*/
    let c =p.substr(b);/*截取第二个&及往后的字符串*/
    this.p='/a/article/search?page='+this.page+'&size='+this.size+c
      console.log(this.p);
     q2. queryParams.page=this.page;
     q2. queryParams.size=this.size;
      sessionStorage.setItem("page", this.page);
      sessionStorage.setItem("size", this.size);
      sessionStorage.setItem("p", this.p);
      sessionStorage.setItem("q",  JSON.stringify(q2));
    this.router.navigate(['/Backstage2/Article'],q2);
    this.service.getqingqiu(this.p).then((response:any)=>{
      this.data=response.data;
      this.paging=response.paging;
      this.total=response.total;
      })
  }
  }
  page2(i){
    let q2 =JSON. parse(sessionStorage.getItem("q"));
    let p = sessionStorage.getItem("p");
    this.page=i;
    this.size= Number(this.myxs);
    sessionStorage.setItem("page", this.page);
    sessionStorage.setItem("size", this.size);
    if(q2===null){
    this.router.navigate(['/Backstage2/Article'],{queryParams:{
      page:this.page,
      size:this.size,
    }})
    //  后台数据接口
   this.p='/a/article/search?page='+this.page+'&size='+this.size;
    // 接收返回的数据
    this.service.getqingqiu(this.p).then((response:any)=>{
    this.data=response.data
    this.paging=response.paging
    })
  }else{
     q2. queryParams.page=this.page;
     q2. queryParams.size=this.size;
    this.router.navigate(['/Backstage2/Article'],q2);
    let b =p.indexOf('&',25)/*第二个字符串&的索引值*/
    let c =p.substr(b);/*截取第二个&及往后的字符串*/
    this.p='/a/article/search?page='+this.page+'&size='+this.size+c;
    sessionStorage.setItem("page", this.page);
    sessionStorage.setItem("size", this.size);
    sessionStorage.setItem("p", this.p);
    sessionStorage.setItem("q",  JSON.stringify(q2));
    this.service.getqingqiu(this.p).then((response:any)=>{
    this.data=response.data;
    this.paging=response.paging;
    })
  }
 }
 next(){
  let q2 =JSON. parse(sessionStorage.getItem("q"));
  let p = sessionStorage.getItem("p");
  this.page= this.page-1;
  if(Number(this.myxs)!==0){
    this.size= this.myxs;
  }else{
    this.size=10
  }
    sessionStorage.setItem("page", this.page);
    sessionStorage.setItem("size", this.size);
    if(q2===null){  this.p='/a/article/search?page='+this.page+'&size='+this.size
    this.router.navigate(['/Backstage2/Article'],{queryParams:{
      page:this.page,
      size:this.size
    }})
    this.service.getqingqiu(this.p).then((response:any)=>{
      this.data=response.data
      this.paging=response.paging
    })}else{
      q2.queryParams.page=this.page;
      q2.queryParams.size=this.size;
        let b =p.indexOf('&',25)/*第二个字符串&的索引值*/
            let c =p.substr(b);/*截取第二个&及往后的字符串*/
            this.p='/a/article/search?page='+this.page+'&size='+this.size+c;
            sessionStorage.setItem("p", this.p);
            sessionStorage.setItem("q",  JSON.stringify(q2));
            this.router.navigate(['/Backstage2/Article'],q2);
            this.service.getqingqiu(this.p).then((response:any)=>{
            console.log(response)
            this.data=response.data
            this.paging=response.paging
            })
    }
  
 }
after(){
  let q2 =JSON. parse(sessionStorage.getItem("q"));
  let p = sessionStorage.getItem("p");
  if(this.page==0||this.page==''){
    this.page=1
  }
  this.page= this.page+1;
  this.size= this.myxs;
  if(this.size===''||this.size==0){
    this.size=10
  }
  let pageCount:any=Math.ceil(this.total/this.size)
  this.paging.length=pageCount
  sessionStorage.setItem("page", this.page);
  sessionStorage.setItem("size", this.size);
  if(q2===null){ this.p='/a/article/search?page='+this.page+'&size='+this.size
  this.router.navigate(['/Backstage2/Article'],{queryParams:{
    page:this.page,
    size:this.size
  }})
  this.service.getqingqiu(this.p).then((response:any)=>{
    this.data=response.data
    this.paging=response.paging
  })}else{
          q2.queryParams.page=this.page;
          q2.queryParams.size=this.size;
          let b =p.indexOf('&',25)/*第二个字符串&的索引值*/
          let c =p.substr(b);/*截取第二个&及往后的字符串*/
          this.p='/a/article/search?page='+this.page+'&size='+this.size+c;
          sessionStorage.setItem("p", this.p);
          sessionStorage.setItem("q",  JSON.stringify(q2));
          this.router.navigate(['/Backstage2/Article'],q2);
          this.service.getqingqiu(this.p).then((response:any)=>{
          console.log(response)
          this.data=response.data
          this.paging=response.paging
          })
  }
  
}
empty(){
  let q2 =JSON. parse(sessionStorage.getItem("q"));
  if(q2!==null){
  this.page=1;/*展示的页数*/
  this.size=10;/*每页展示的条数*/
  this.router.navigate(['/Backstage2/Article'],{queryParams:{
    page:this.page,
    size:this.size,
  }})
  this.p='/a/article/search?page='+this.page+'&size='+this.size;
  this.service.getqingqiu(this.p).then((response:any)=>{
    this.data=response.data;
    this.paging=response.paging;
    this.total=response.total;
    })
   this.release_time=null;
   this.modification_time=null;
   this.one.value='全部';
   this.two.value='全部';
   this.myxs='10';
   this.djy='1';
   sessionStorage.removeItem("page");
   sessionStorage.removeItem("size");
   sessionStorage.removeItem("release_time");
   sessionStorage.removeItem("modification_time");
   sessionStorage.removeItem("onevalue");
   sessionStorage.removeItem("twovalue");
   sessionStorage.removeItem("q");
   sessionStorage.removeItem("p");
  }else if(q2===null&&this.release_time!=undefined||this.modification_time!=undefined||this.one.value!='全部'||this.two.value!='全部'){
    this.release_time=undefined;
    this.modification_time=undefined;
    this.one.value='全部';
    this.two.value='全部';
    this.myxs='10';
    this.djy='1';
  }
}
search(){
  console.log( this.release_time)
  console.log(this.modification_time)
  console.log(new Date(this.release_time).valueOf())
  console.log(new Date(this.modification_time).valueOf())
  console.log(this.one.value)
  console.log(this.two.value)
  
  this.page=1;
  if(Number(this.myxs)!==0&&this.myxs!==''){
    this.size= Number(this.myxs);/*每页展示的条数*/
  }else{
    this.size=10
    this.myxs='10'
  }
  this.release_time_getTime=new Date(this.release_time).getTime();
  this. modification_time_getTime=new Date(this.modification_time).getTime();
  let q:NavigationExtras={queryParams:{
    page:this.page,
    size:this.size,
  }};
  this.djy='';
  this.p='/a/article/search?page='+this.page+'&size='+this.size;
  if(this.release_time>this.modification_time){
    this.release_time=this.modification_time
  }
  if(this.release_time==this.modification_time){
    this. modification_time_getTime=this. modification_time_getTime+863999999;
  }
  if(this.release_time!=undefined&&this.release_time!='undefined'&&this.release_time!=''){
    this.p=this.p+'&startAt='+ this.release_time_getTime
    q.queryParams.startAt=this.release_time
  }
  if(this.modification_time!=undefined&&this.release_time!='undefined'&&this.release_time!=''){
    this.p=this.p+'&endAt='+this. modification_time_getTime;
    q.queryParams.endAt=this.modification_time
  }
  if(this.one.value!='全部'){
    this.p=this.p+'&type='+this.one.value;
    q.queryParams.type=this.one.value;
  }
  if(this.two.value!='全部'){
    this.p=this.p+'&status='+this.two.value
    q.queryParams.status=this.two.value;
  }
  sessionStorage.setItem("page", this.page);
  sessionStorage.setItem("size", this.size);
  sessionStorage.setItem("release_time", this.release_time);
  sessionStorage.setItem("modification_time", this.modification_time);
  sessionStorage.setItem("onevalue", this.one.value);
  sessionStorage.setItem("twovalue", this.two.value);
  sessionStorage.setItem("q",  JSON.stringify(q));
  sessionStorage.setItem("p", this.p);
 

  this.router.navigate(['/Backstage2/Article'],q);
  this.service.getqingqiu(this.p).then((response:any)=>{
    this.data=response.data;
    this.paging=response.paging;
    this.total=response.total;
    })
  console.log(this.p)
}
home_page(){
  let q2 =JSON. parse(sessionStorage.getItem("q"));
  let p = sessionStorage.getItem("p");
  this.page=1;
  if(Number(this.myxs)!==0){
    this.size=Number(this.myxs);
  }else{
    this.size=10
  }
  sessionStorage.setItem("page", this.page);
  sessionStorage.setItem("size", this.size);
  if(q2===null){
    this.p='/a/article/search?page='+this.page+'&size='+this.size
    this.router.navigate(['/Backstage2/Article'],{queryParams:{
      page:this.page,
      size:this.size
    }})
    this.service.getqingqiu(this.p).then((response:any)=>{
      console.log(response)
      this.data=response.data
      this.paging=response.paging
    })
  }else{
    q2.queryParams.page=this.page;
    q2.queryParams.size=this.size;
      let b =p.indexOf('&',25)/*第二个字符串&的索引值*/
          let c =p.substr(b);/*截取第二个&及往后的字符串*/
          this.p='/a/article/search?page='+this.page+'&size='+this.size+c;
          sessionStorage.setItem("p", this.p);
          sessionStorage.setItem("q",  JSON.stringify(q2));
          this.router.navigate(['/Backstage2/Article'],q2);
          this.service.getqingqiu(this.p).then((response:any)=>{
          console.log(response)
          this.data=response.data
          this.paging=response.paging
          })
  }
}
tail_page(){
  let q2 =JSON. parse(sessionStorage.getItem("q"));
  let p = sessionStorage.getItem("p");
  if(Number(this.myxs)!==0){
    this.size=Number(this.myxs);
  }else{
    this.size=10
  }
  let pageCount:any=Math.ceil(this.total/this.size);
  this.page=pageCount;
  sessionStorage.setItem("page", this.page);
  sessionStorage.setItem("size", this.size);
  if(q2===null){
    this.p='/a/article/search?page='+this.page+'&size='+this.size
    this.router.navigate(['/Backstage2/Article'],{queryParams:{
      page:this.page,
      size:this.size
    }})
    this.service.getqingqiu(this.p).then((response:any)=>{
      console.log(response)
      this.data=response.data
      this.paging=response.paging
    })
  }else{
    q2.queryParams.page=this.page;
    q2.queryParams.size=this.size;
          let b =p.indexOf('&',25)/*第二个字符串&的索引值*/
          let c =p.substr(b);/*截取第二个&及往后的字符串*/
          this.p='/a/article/search?page='+this.page+'&size='+this.size+c;
          sessionStorage.setItem("p", this.p);
          sessionStorage.setItem("q",  JSON.stringify(q2));
          this.router.navigate(['/Backstage2/Article'],q2);
          this.service.getqingqiu(this.p).then((response:any)=>{
          console.log(response)
          this.data=response.data
          this.paging=response.paging
          })
  }
}
go_online(key){
  this.bloor=true
  this.Passvalue=0
  this.key=key


//  let aa= confirm('您确定上线吗')
//  if(aa==true){
//   this.p='/a/u/article/status';
//   let a ='id='+this.data[key].id+'&status=2'
//    this.service.putqingqiu(this.p,a).then((response:any)=>{
//      console.log(response.message)
//     //  sessionStorage.setItem("message", response.message)
//      if(response.code==0){
//       //  window.location.reload();
//       this.data[key].status=2
//       setTimeout(function(){
//         alert('上线成功')
//         },500)
//      }else{
//        alert('上线失败')
//      }
//    })
//  }
}




popup(event){
  this.bloor=false
  if(event==0){
    this.p='/a/u/article/status';
   let a ='id='+this.data[this.key].id+'&status=2'
   this.service.putqingqiu(this.p,a).then((response:any)=>{
     console.log(response.message)
     sessionStorage.setItem("message", response.message)
     if(response.code==0){
            //  window.location.reload();
            this.data[this.key].status=2
            this.bloor=true
            this.Passvalue=6
           }else{
            this.bloor=true
            this.Passvalue=7
           }
   })
  }else if(event=='1'){
    this.bloor=false
    this.p='/a/u/article/status';
    let a ='id='+this.data[this.key].id+'&status=1';
    this.service.putqingqiu(this.p,a).then((response:any)=>{
      console.log(response.message)
      sessionStorage.setItem("message", response.message)
      if(response.code==0){
             //  window.location.reload();
             this.data[this.key].status=1
             this.bloor=true
             this.Passvalue=6
            }else{
             this.bloor=true
             this.Passvalue=7
            }
    })
  }else if(event==2){
    this.bloor=false;
     this.p='/a/u/article/'+this.data[this.key].id;
  this.http.delete(this.p).subscribe((response:any)=>{
    console.log(response)
    if(response.code==0){
       sessionStorage.setItem("Passvalue","6");
        window.location.reload(); 
    }else{
      this.bloor=true
      this.Passvalue=7
    }
  })
  }
  else if(event==-1){
    this.bloor=false
  }
 }

// ngDoCheck():void{
// if(this.Passvalue!=undefined&&this.Passvalue!=null&&this.Passvalue!=''){
//   console.log(this.box.bl)
// }
// }
offline(key){
  this.bloor=true
  this.Passvalue=1
  this.key=key
  // if(aa==true){
  //   this.p='/a/u/article/status';
  //   let a ='id='+this.data[key].id+'&status=1'
  //   this.service.putqingqiu(this.p,a).then((response:any)=>{
  //     console.log(response.message)
  //     sessionStorage.setItem("message2", response.message)
  //     if(response.code==0){
  //       this.data[key].status=1;
  //       setTimeout(function(){
  //           alert('下线成功')
  //       },500)
  //     }else{
  //       alert('下线失败')
  //     }
  //   })
  // }
}
// 删除
delete(key){
  this.bloor=true
  this.Passvalue=2
  this.key=key
  // this.p='/a/u/article/'+this.data[key].id;
  // this.http.delete(this.p).subscribe((response:any)=>{
  //   console.log(response)
  //   if(response.code==0){
  //     alert('删除成功');
  //   }
  // })
}

}
