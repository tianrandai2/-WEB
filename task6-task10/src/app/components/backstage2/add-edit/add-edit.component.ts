import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ServiceService } from '../../../services/service.service';
import { Router,NavigationExtras } from '@angular/router';
import axios from 'axios';
@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent implements OnInit {
  type: any = {
    value: '请选择',
    option: ['请选择', 0, 1, 2, 3]
  };
  dt: any = {
    value: '请选择',
    option: ['请选择', 0, 1, 2, 3, 4, 5, 6]
  }
  imagename:any;/*图片名字*/
  size: any;/*图片大小*/
  sctp: any;/*表单信息*/
  config:any;/*进度条*/
  probar:any;/*进度条*/
  file:any;/*提取的图片对象*/
  one:any=true;/*上传*/
  two:any=false;/*上传*/
  title:any;/*标题*/
  explain:any;/*说明*/
  jumplink:any;/*跳转链接*/
  image:any;/*图片地址*/
  date:any;/*创建时间*/
  Passvalue:any;
  bloor:any=false;
  constructor(public http: HttpClient,public https: ServiceService,public router:Router ) {

  }

  ngOnInit() {

  }
  ngAfterViewInit(): void {
    
  }
  // 表单绑定change事件
  tu(key: any){
    let wthis = this
    this.probar=null
    this.probar=null
    this.imagename=null
    console.log(this)
   
  
    this.file= key.target.files[0];/*提取图片信息*/
    console.log(this.file)


    let reader = new FileReader();/*转化图片为64位编码*/
    reader.readAsDataURL(this.file)


    reader.onload = function (){
      let s: any = document.getElementById('imj');/*渲染图片*/
      s.src = this.result
      console.log(s.src)
      let progress:any=document.getElementById('progress')
      console.log(progress)
    }

    var formData = new FormData()/*把图片转化为表单信息*/
    console.log(this.file)
    formData.append("file", this.file)
    console.log(formData.get("file"))
    this.sctp = formData
    console.log(this.sctp);
    
     reader.onprogress= function () {
    let progress:any=document.getElementById('progress')
    progress.style.width='';
    progress.textContent='';
    wthis.config={
      onUploadProgress(event){
        // wthis.probar=((event.loaded / event.total) * 100)
        wthis.probar= Math.round((event.loaded / event.total) * 100);
        progress.style.width = wthis.probar+ '%';
        progress.textContent = wthis.probar+ '%';
      }
    }
      // if(event.lengthComputable) {
        // let progressLoaded:any= Math.round((event.loaded / event.total) * 100);
        //   progress.style.width = progressLoaded+ '%';
        //   progress.textContent = progressLoaded+ '%';
    // }
     }
    this.imagename = key.target.files[0].name;
    let o: any = key.target.files[0].size / 1048576;
    if (o < 1024) {
      this.size = o.toFixed(2) + 'MB'
    } else {
      o = Math.round(o / 1024)
      this.size = o.toFixed(2) + 'G'
    }
  }
  // 上传
  sc() {
    // console.log(this.sctp)
    // const httpOptions = {
    //   headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data' })
    // };
    // const httpOptions = {
    //   headers: new HttpHeaders({ 'Content-Type': ' multipart/form-data' }),
    // }
    // const options = {
    //   httpOptions: httpOptions,
    //   reportProgress: true
    // }
    // var api = '/a/u/img/task';
    // this.http.post(api, this.sctp,options).subscribe((response: any) => {
    //   console.log(response)
    // })

    this.https.axiosGet(this.sctp,this.config).then((da:any)=>{
      console.log(da.data.data.url)
      this.image=da.data.data.url
    })
  }

  // 删除
  delete(){
   this.imagename=null
   this.size=null
   this.probar=null
   let s: any = document.getElementById('imj');/*渲染图片*/
   s.src = '';
   let progress:any=document.getElementById('progress');
   progress.style.width='';
   progress.textContent='';
   this.image='' 
  if(this.one==true){
    this.one=false
    this.two=true
  }else{
    this.one=true
    this.two=false
  }
  }
// 立即上线
  online_immediately(){
    // this.bloor=true
    // this.Passvalue='您确定要新增上线吗'
    console.log(this.title)
    console.log(this.explain)
    console.log(this.jumplink)
    console.log(this.type.value)
    console.log(this.dt.value)
    console.log(this.image)
   let date:any=new Date()
   this.date=date.getTime()
   console.log(this.date)
    let api:any='/a/u/article';
    let data:any;
    // let data:any='title='+this.title+'&type='+this.type.value+'&status=2'+'&img='+this.image+'&url='+this.jumplink+'&createAt='+this.date
    if(this.type.value!=3){
     data={
      title:this.title,
      type:this.type.value,
      status:2,
      img:this.image,
      url:this.jumplink,
      createAt:this.date,
      content:this.explain
    }
  }else{
    data={
      title:this.title,
      type:this.type.value,
      status:2,
      img:this.image,
      url:this.jumplink,
      createAt:this.date,
      industry:this.dt.value,
      content:this.explain
    }
  }
  // let formData:any = new FormData()
  //    formData.append("data", data)
    
console.log(data)

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' }),
    }
    const options = {
      httpOptions: httpOptions,
      reportProgress: true
    }
   
   this.post(api,httpOptions, data).subscribe((response: any) => {
        console.log(response)
        if(response.code==0){ 
          this.router.navigate(['/Backstage2/Article'],{queryParams:{
            page:1,
            size:10
          }})
          sessionStorage.setItem("Passvalue","3")
      }else{
        this.bloor=true
        this.Passvalue=4
      }
    })
  }

// 存为草稿
  draft(){
    this.bloor=true
    this.Passvalue='您确定要新增草稿吗'
    console.log(this.title)
    console.log(this.explain)
    console.log(this.jumplink)
    console.log(this.type.value)
    console.log(this.dt.value)
    console.log(this.image)
   let date:any=new Date()
   this.date=date.getTime()
   console.log(this.date)
   let api:any='/a/u/article';
   let data:any;

   if(this.type.value!=3){
    data={
     title:this.title,
     type:this.type.value,
     status:1,
     img:this.image,
     url:this.jumplink,
     createAt:this.date,
     content:this.explain
   }
 }else{
   data={
     title:this.title,
     type:this.type.value,
     status:1,
     img:this.image,
     url:this.jumplink,
     createAt:this.date,
     industry:this.dt.value,
     content:this.explain
   }
 }
 console.log(data)

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' }),
    }
    this.post(api,httpOptions, data).subscribe((response: any) => {
      console.log(response)
      if(response.code==0){ 
        this.router.navigate(['/Backstage2/Article'],{queryParams:{
          page:1,
          size:10
        }});
        sessionStorage.setItem("Passvalue","3");
    }else{
      this.bloor=true
      this.Passvalue=4
    }
  })
  }



  // 取消
 cancel(){
  this.router.navigate(['/Backstage2/Article'],{queryParams:{
    page:1,
    size:10
  }})
  let p:any='/a/article/search?page=1&size=10';
  this.https.getqingqiu(p);
 }



// 数据序列化
  public post(url: string, httpOptions,data?: any) {
    const params = typeof (data) === 'object' && String(data) !== '[object File]' ? this.paramFormat(data) : data;
    return this.http.post(url, params, httpOptions);
  }
  private paramFormat(data: any): string {
    let paramStr = '', name, value, subName, innerObj;
    for (name in data) {
      value = data[name];
      if (value instanceof Array) {
        for (let i of value) {
          subName = name;
          innerObj = {};
          innerObj[subName] = i;
          paramStr += this.paramFormat(innerObj) + '&';
        }
      } else if (value instanceof Object) {
        Object.keys(value).forEach(function (key) {
          subName = name + '[' + key + ']';
          innerObj = {};
          innerObj[subName] = value[key];
          paramStr += this.paramFormat(innerObj) + '&';
        });
      } else if (value !== undefined && value !== null) {
        paramStr += encodeURIComponent(name) + '='
          + encodeURIComponent(value) + '&';
      }
    }
    return paramStr.length ? paramStr.substr(0, paramStr.length - 1) : paramStr;
  }


}