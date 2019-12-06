import { Component, OnInit,Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
@Output('Children') popup = new EventEmitter<any>();
bl:any;
@Input()goonline:any
  constructor() { }

  ngOnInit(){
  console.log(this.goonline)
  }

  // ngOnChanges(): void{
  //   if(this.goonline!=undefined&&this.goonline!=null&&this.goonline!=''){
  //     this.bl=false
  //   }
  // }


  // 上线 0 下线1 删除2 新增成功3 新增失败4 编辑5 操作成功6 操作失败7 
  yes0(){
    this.bl=0
    this.popup.emit(this.bl);
  }
  yes1(){
    this.bl=1
    this.popup.emit(this.bl);
  }
  yes2(){
    this.bl=2
    this.popup.emit(this.bl);
  }
  no(){
    this.bl=-1
    this.popup.emit(this.bl);
  }

}
