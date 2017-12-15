import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Directive({
    selector: 'echart'
})
export class EChartOptionDirective1 implements OnInit {
    @Input('chartType') chartType: any;

    @Input('chartSet') chartSet: number;

    constructor(private el: ElementRef) {
    }

    public ngOnInit(): void {

        echarts.init(this.el.nativeElement).setOption(this.chartType);
    }

    public ngOnChanges(){
        if(this.chartSet && this.chartSet!=0){
            echarts.init(this.el.nativeElement).setOption(this.chartType);
        }

    }

}
