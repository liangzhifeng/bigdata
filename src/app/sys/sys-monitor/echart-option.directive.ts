import { Directive, ElementRef, HostListener, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
//import * as echarts from 'echarts';
import { Http, Response } from '@angular/http';

declare var echarts;

@Directive({
  selector: 'echart'
})
export class EChartOptionDirective1 implements OnChanges {
  @Input('chartType') chartType: any;

  public url = "assets/json/chinamap.json";
  public elment:any;

  constructor(private el: ElementRef,public http: Http) {}

  //public ngOnInit(): void {
  //this.elment = echarts.init(this.el.nativeElement);
  //  this.elment.setOption(this.chartType);
  //}

  public ngOnChanges(changes: SimpleChanges) {
    this.elment = echarts.init(this.el.nativeElement);
    this.elment.setOption(this.chartType);
  }
}
