import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  
  constructor(public http:HttpClient) { } 
  getqingqiu(api){
 let data:any;
 let pageCount:any;
 let total:any;
 let paging:any=[];
     return new Promise((resolve,reject)=>{
       this.http.get(api).subscribe((response:any)=>{
       console.log(response)
       data=response.data.articleList;/*返回的数据*/
       total=response.data.total/*总的数据数量*/
       pageCount= Math.ceil(response.data.total/response.data.size);/*总的页数*/
        for(let u=1;u<=pageCount;u++){
          paging.push(u)
         }
        //  for(let i=0;i<data.length;i++){
        //   switch(data[i].type){
        //     case 0:
        //     data[i].type='首页banner';
        //     break;
        //     case 1:
        //     data[i].type='找职位banner';
        //     break;
        //     case 2:
        //     data[i].type='找精英banner';
        //     break;
        //     case 3:
        //     data[i].type='行业大图';
        //     break;
        //   };
        //   switch(data[i].status){
        //     case 1:
        //     data[i].status='草稿';
        //     break;
        //     case 2:
        //     data[i].status='上线';
        //     break;
        //   };
        // }
      let a ={data:data,paging:paging,total:total}
      resolve(a)
       })
     })
  }

  putqingqiu(api,a){
    return new Promise((resolve,reject)=>{
      const httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
        };
      this.http.put(api,a,httpOptions).subscribe((response:any)=>{
        console.log(response)
        resolve(response)
      })
    })
  }
  

  axiosGet(git,as){
    let api = '/a/u/img/task';
    return new Promise((resolve,reject)=>{
      axios.post(api,git,as).then(function(response){
        console.log(response);
        resolve(response)
      })
    })

  }
  axiosGet2(git){
    let api = '/a/u/article';
    return new Promise((resolve,reject)=>{
      axios.post(api,git).then(function(response){
        console.log(response);
        resolve(response)
      })
    })

  }
}
