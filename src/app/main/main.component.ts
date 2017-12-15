import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {

  tabs:any;
  _value:string;
  constructor() {
    this._value='';


  }





  ngOnInit() {


  }

}
