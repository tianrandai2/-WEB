import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  name:any=''
  pwd:any=''
  errorprompt:any=''
  constructor(public http:HttpClient,public Jump:Router) {
    
   }

  ngOnInit() {
   
  }
  Clicklogin(){
  
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
    };
    var api='/a/login';
    var data="name="+this.name+"&pwd="+this.pwd;
    console.log(data)
    this.http.post(api,data,httpOptions).subscribe((response:any)=>{
      console.log(response)
      if(response.code===0){
        sessionStorage.setItem("response",JSON.stringify(response) );
        this.Jump.navigate(['/Backstage2'])
      }else{
       this.errorprompt=response.message
      }
    })
  }
  clickuser(){
    this.name=''
    this.errorprompt=''
  }
  clicpwd(){
    this.pwd=''
    this.errorprompt=''
  }
}
