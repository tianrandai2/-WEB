import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router,NavigationExtras} from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(public aa:Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      var response = JSON.parse(sessionStorage.getItem("response"));/*接收后台传过来的数据*/
      if(response!==null){
        return true;
      }else{
        alert("请登录");
        this.aa.navigate(['/Login'])
        return false;
      }
      
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  
}
