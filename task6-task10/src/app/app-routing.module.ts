import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

import { Backstage2Component } from './components/backstage2/backstage2.component';
import { ArticleComponent } from './components/backstage2/article/article.component';
import { AuthGuard }from './auth.guard';
import { AddEditComponent } from './components/backstage2/add-edit/add-edit.component';
const routes: Routes = [

  { path:'Login',component:LoginComponent },

  // {path:'Backstage',component:BackstageComponent, canActivate: [AuthGuard],},
  {path:'Backstage2',component:Backstage2Component,canActivate: [AuthGuard],
  children:[{path:'Article',component:ArticleComponent},
            {path:'addedit',component:AddEditComponent}]
},
  
  {path:'',redirectTo:'/Login',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
