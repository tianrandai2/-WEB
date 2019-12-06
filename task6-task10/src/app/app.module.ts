import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

import { FormsModule } from '@angular/forms';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import { Backstage2Component } from './components/backstage2/backstage2.component';
import { ArticleComponent } from './components/backstage2/article/article.component';
import { ServiceService } from './services/service.service';
import { AddEditComponent } from './components/backstage2/add-edit/add-edit.component';
import { QuillModule } from 'ngx-quill';
import { PopupComponent } from './components/popup/popup.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Backstage2Component,
    ArticleComponent,
    AddEditComponent,
    PopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    QuillModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
