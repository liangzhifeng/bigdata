import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-check-overview',
  templateUrl: './check-overview.component.html',
  styleUrls: ['./check-overview.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CheckOverviewComponent implements OnInit {

  data:any;
  constructor() {
    this.data = [
      {
        SolarPowerPlantID:1,//太阳能厂ID
      SolarPowerPlant:'山东青岛太阳能电厂',   //太阳能厂的名称
      SppLocation:'山东青岛',  //太阳能厂的位置
      position:{
      longitude:'',
        latitude:''  },   //地理定位经纬度坐标
      DefectNumber:123,  //故障数
      HealthyState:30,  //健康状态
      LastCheckTime:'2017/11/12',  //近次巡检日期de 时间戳
      IfBookCheck:true,  //是否预约巡检
      BookDate:'2017/12/12' //预约巡检的日期de 时间戳
      },  {
        SolarPowerPlantID:2,//太阳能厂ID
        SolarPowerPlant:'云南大理太阳能电厂',   //太阳能厂的名称
        SppLocation:'云南大理',  //太阳能厂的位置
        position:{
          longitude:'',
          latitude:''  },   //地理定位经纬度坐标
        DefectNumber:123,  //故障数
        HealthyState:30,  //健康状态
        LastCheckTime:'2017/11/12',  //近次巡检日期de 时间戳
        IfBookCheck:true,  //是否预约巡检
        BookDate:'2017/12/12' //预约巡检的日期de 时间戳
      },  {
        SolarPowerPlantID:3,//太阳能厂ID
        SolarPowerPlant:'云南大理太阳能电厂',   //太阳能厂的名称
        SppLocation:'云南大理',  //太阳能厂的位置
        position:{
          longitude:'',
          latitude:''  },   //地理定位经纬度坐标
        DefectNumber:123,  //故障数
        HealthyState:30,  //健康状态
        LastCheckTime:'2017/11/12',  //近次巡检日期de 时间戳
        IfBookCheck:true,  //是否预约巡检
        BookDate:'2017/12/12' //预约巡检的日期de 时间戳
      },  {
        SolarPowerPlantID:4,//太阳能厂ID
        SolarPowerPlant:'云南大理太阳能电厂',   //太阳能厂的名称
        SppLocation:'云南大理',  //太阳能厂的位置
        position:{
          longitude:'',
          latitude:''  },   //地理定位经纬度坐标
        DefectNumber:123,  //故障数
        HealthyState:30,  //健康状态
        LastCheckTime:'2017/11/12',  //近次巡检日期de 时间戳
        IfBookCheck:true,  //是否预约巡检
        BookDate:'2017/12/12' //预约巡检的日期de 时间戳
      },  {
        SolarPowerPlantID:5,//太阳能厂ID
        SolarPowerPlant:'云南大理太阳能电厂',   //太阳能厂的名称
        SppLocation:'云南大理',  //太阳能厂的位置
        position:{
          longitude:'',
          latitude:''  },   //地理定位经纬度坐标
        DefectNumber:123,  //故障数
        HealthyState:30,  //健康状态
        LastCheckTime:'2017/11/12',  //近次巡检日期de 时间戳
        IfBookCheck:true,  //是否预约巡检
        BookDate:'2017/12/12' //预约巡检的日期de 时间戳
      },  {
        SolarPowerPlantID:6,//太阳能厂ID
        SolarPowerPlant:'云南大理太阳能电厂',   //太阳能厂的名称
        SppLocation:'云南大理',  //太阳能厂的位置
        position:{
          longitude:'',
          latitude:''  },   //地理定位经纬度坐标
        DefectNumber:123,  //故障数
        HealthyState:30,  //健康状态
        LastCheckTime:'2017/11/12',  //近次巡检日期de 时间戳
        IfBookCheck:true,  //是否预约巡检
        BookDate:'2017/12/12' //预约巡检的日期de 时间戳
      },  {
        SolarPowerPlantID:7,//太阳能厂ID
        SolarPowerPlant:'云南大理太阳能电厂',   //太阳能厂的名称
        SppLocation:'云南大理',  //太阳能厂的位置
        position:{
          longitude:'',
          latitude:''  },   //地理定位经纬度坐标
        DefectNumber:123,  //故障数
        HealthyState:30,  //健康状态
        LastCheckTime:'2017/11/12',  //近次巡检日期de 时间戳
        IfBookCheck:true,  //是否预约巡检
        BookDate:'2017/12/12' //预约巡检的日期de 时间戳
      },  {
        SolarPowerPlantID:8,//太阳能厂ID
        SolarPowerPlant:'云南大理太阳能电厂',   //太阳能厂的名称
        SppLocation:'云南大理',  //太阳能厂的位置
        position:{
          longitude:'',
          latitude:''  },   //地理定位经纬度坐标
        DefectNumber:123,  //故障数
        HealthyState:30,  //健康状态
        LastCheckTime:'2017/11/12',  //近次巡检日期de 时间戳
        IfBookCheck:true,  //是否预约巡检
        BookDate:'2017/12/12' //预约巡检的日期de 时间戳
      }
    ];


  }

  ngOnInit() {
  }

}
