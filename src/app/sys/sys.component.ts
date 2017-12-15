import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sys',
  templateUrl: './sys.component.html',
  styleUrls: ['./sys.component.scss']
})
export class SysComponent implements OnInit {

  public showuser:boolean;

  constructor( ) { }

  ngOnInit() {
    var url = window.location.href;
    var arr = url.split("#/");
    if(arr && arr[1] && arr[1] === 'platform'){
      this.showuser = false;
    } else {
      this.showuser = true;
    }

    
  }

  changepage(){
    this.showuser = !this.showuser;
  }
}
