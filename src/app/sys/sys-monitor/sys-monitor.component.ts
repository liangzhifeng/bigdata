import { Component, OnInit } from '@angular/core';
import { SysMonitorService } from './sys-monitor.service';
import { Router } from '@angular/router';

declare var echarts;

@Component({
  selector: 'sys-monitor',
  templateUrl: './sys-monitor.component.html',
  styleUrls: ['./sys-monitor.component.scss'],
  providers: [SysMonitorService]
})
export class SysMonitorComponent implements OnInit {

  public p1Chart = {};
  public p2Chart = {};
  public p3Chart = {};
  public p4Chart = {};
  public pie4Chart = {};
  public line5Chart = {};
  public line6Chart = {};
  public line7Chart = {};
  public bar8Chart = {};
  public line9Chart = {};
  public bar10Chart = {};

  public hasP1Chart: boolean;
  public hasP2Chart: boolean;
  public hasP3Chart: boolean;
  public hasP4Chart: boolean;
  public hasPie4Chart: boolean;
  public hasLine5Chart: boolean;
  public hasLine6Chart:boolean;
  public hasLine7Chart: boolean;
  public hasBar8Chart: boolean;
  public hasLine9Chart:boolean;
  public hasBar10Chart: boolean;

  public tradeOrderInfo:any;
  public bar8ChartIdx:number;
  public bar10ChartIdx:number;

  public userQty1:number;
  public userQty2:number;
  public userQty3:number;
  public userQty4:number;

  public tradeToday:String;
  public orderToday:String;
  public totalPrice:String;
  public totalNum:String;

  constructor(public sysMonitorService: SysMonitorService,private router: Router) {
  }


  ngOnInit() {

    this.hasP1Chart = false;
    this.hasP2Chart = false;
    this.hasP3Chart = false;
    this.hasP4Chart = false;
    this.hasPie4Chart = false;
    this.hasLine5Chart = false;
    this.hasLine6Chart = false;
    this.hasLine7Chart = false;
    this.hasBar8Chart = false;
    this.hasLine9Chart = false;
    this.hasBar10Chart = false;

    //let param = {
    //  company_account: 'test2017',
    //  login_name: 'test2017',
    //  password: '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92'
    //};
    let _this = this;

    _this.refresh();
    setInterval(function () {
      _this.refresh();
    }, 1000 * 60 * 60);

  }

  refresh()
  {
    let _self = this;
    this.sysMonitorService.getUserInfo({}).subscribe(
        res => {

        this.hasP1Chart = true;
        this.hasP2Chart = true;
        this.hasP3Chart = true;
          this.hasP4Chart = true;
        this.hasPie4Chart = true;
        this.hasLine5Chart = true;
        this.hasLine6Chart = true;

        let serveData = res.retbody.getUserInfo;
        let userQty = serveData.userQty;
        this.userQty1 = userQty[0];
        this.userQty2 = userQty[1];
        this.userQty3 = userQty[2];
          this.userQty4 = userQty[3];
        let activeUser = serveData.activeUser;
        let RegisteredUser = serveData.RegisteredUser;
          let AllRegisteredUser = serveData.AllRegisteredUser;
        this.p1Chart = {
          textStyle: {
            color: 'rgba(255, 255, 255, 0.3)'
          },
          labelLine: {
            normal: {
              lineStyle: {
                color: 'rgba(0,0 ,0 ,0 )'
              }
            }
          },
          tooltip: {
            trigger: 'item',
            position: [10, 10],
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            orient: 'vertical',
            left: 'left',
          },
          series: [
            {
              name: 'User',
              type: 'pie',
              radius: '50%',
              center: ['23%', '55%'],
              data: [
                {
                  value: userQty[0],
                  name: 'Online User',
                  tooltip: {
                    trigger: 'item',
                    formatter: "{b} : {c} ({d}%)"
                  },
                  label: {
                    normal: {
                      show: false
                    }
                  },
                  itemStyle: {
                    normal: {
                      // 设置扇形的颜色
                      color: ['#3398DB'],
                      shadowBlur: 200,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                  }
                },
                {
                  value: userQty[2],
                  name: 'Offline User',
                  label: {
                    normal: {
                      show: false
                    }
                  },
                  tooltip: {
                    trigger: 'item',
                    position: [10, 10],
                    formatter: "{b} : {c} ({d}%)"
                  },
                  itemStyle: {
                    normal: {
                      // 设置扇形的颜色
                      //color:['#3398DB'],
                      color: ['#696969'],
                      shadowBlur: 200,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                  }
                }
              ],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]


        };
        this.p2Chart = {
          textStyle: {
            color: 'rgba(255, 255, 255, 0.3)'
          },
          labelLine: {
            normal: {
              lineStyle: {
                color: 'rgba(0,0 ,0 ,0 )'
              }
            }
          },
          tooltip: {
            trigger: 'item',
            position: [7, 10],
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            orient: 'vertical',
            left: 'left',
          },
          series: [
            {
              name: 'User',
              type: 'pie',
              radius: '50%',
              center: ['23%', '55%'],
              data: [
                {
                  value: userQty[1],
                  name: 'On Road',
                  tooltip: {
                    trigger: 'item',
                    formatter: "{b} : {c} ({d}%)"
                  },
                  label: {
                    normal: {
                      show: false
                    }
                  },
                  itemStyle: {
                    normal: {
                      // 设置扇形的颜色
                      color: ['#3398DB'],
                      shadowBlur: 200,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                  }
                },
                {
                  value: userQty[2],
                  name: 'Not On Road',
                  label: {
                    normal: {
                      show: false
                    }
                  },
                  tooltip: {
                    trigger: 'item',
                    position: [10, 10],
                    formatter: "{b} : {c} ({d}%)"
                  },
                  itemStyle: {
                    normal: {
                      // 设置扇形的颜色
                      color: ['#696969'],
                      shadowBlur: 200,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                  }
                }
              ],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        };
        this.p3Chart = {
          textStyle: {
            color: 'rgba(255, 255, 255, 0.3)'
          },
          labelLine: {
            normal: {
              lineStyle: {
                color: 'rgba(0,0 ,0 ,0 )'
              }
            }
          },
          tooltip: {
            trigger: 'item',
            position: [10, 10],
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            orient: 'vertical',
            left: 'left',
          },
          series: [
            {
              name: 'User',
              type: 'pie',
              radius: '50%',
              center: ['23%', '55%'],
              data: [
                {
                  value: userQty[2],
                  name: 'Avaliable',
                  tooltip: {
                    trigger: 'item',
                    position: [10, 10],
                    formatter: "{b} : {c} ({d}%)"
                  },
                  label: {
                    normal: {
                      show: false
                    }
                  },
                  selected: true,
                  itemStyle: {
                    normal: {
                      // 设置扇形的颜色
                      color: ['#3398DB'],
                      shadowBlur: 200,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                  }
                },
                {
                  value: 0,
                  name: 'Unavaliable',
                  label: {
                    normal: {
                      show: false
                    }
                  },
                  tooltip: {
                    position: [20, 10],
                    trigger: 'item',
                    formatter: "{b} : {c} ({d}%)"
                  },
                  itemStyle: {
                    normal: {
                      // 设置扇形的颜色
                      color: ['#696969'],
                      shadowBlur: 200,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                  }
                }
              ],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        };

          this.p4Chart = {
            textStyle: {
              color: 'rgba(255, 255, 255, 0.3)'
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: 'rgba(0,0 ,0 ,0 )'
                }
              }
            },
            tooltip: {
              trigger: 'item',
              position: [10, 10],
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
              orient: 'vertical',
              left: 'left',
            },
            series: [
              {
                name: 'User',
                type: 'pie',
                radius: '50%',
                center: ['23%', '55%'],
                data: [
                  {
                    value: userQty[3],
                    name: 'Subscriber User',
                    tooltip: {
                      trigger: 'item',
                      position: [10, 10],
                      formatter: "{b} : {c} ({d}%)"
                    },
                    label: {
                      normal: {
                        show: false
                      }
                    },
                    selected: true,
                    itemStyle: {
                      normal: {
                        // 设置扇形的颜色
                        color: ['#3398DB'],
                        shadowBlur: 200,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                      }
                    }
                  },
                  {
                    value: 0,
                    name: 'Other User',
                    label: {
                      normal: {
                        show: false
                      }
                    },
                    tooltip: {
                      position: [20, 10],
                      trigger: 'item',
                      formatter: "{b} : {c} ({d}%)"
                    },
                    itemStyle: {
                      normal: {
                        // 设置扇形的颜色
                        color: ['#696969'],
                        shadowBlur: 200,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                      }
                    }
                  }
                ],
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
                }
              }
            ]
          };
        let location = res.retbody.getUserInfo.location;
        this.setPie4Chart(location);

        var arr1 = [];
        activeUser.forEach(function(item){
          var date = _self.sysMonitorService.monthInEn(item.date);
          arr1.push(date);
        })
        this.line5Chart = {
          title: {
            text: '',
            subtext: '',
            x: "center"
          },
          tooltip: {
            trigger: 'axis'
          },
          xAxis: {
            axisLabel: {color: '#808080'},
            axisLine: {show: false},
            axisTick: {show: false},
            type: 'category',
            boundaryGap: false,
            data:['Jan','Feb','Mar','Apr','May','June','July','Aug','Sept','Oct','Nov','Dec']
          },

          yAxis : [
            {
              axisLine: {show: false},
              axisTick: {show: false},
              type : 'value',
              axisLabel : {
                formatter: '{value}',
                textStyle: {
                  color: '#808080'
                }
              }
            }
          ],
          series: [
            {
              name: 'Required',
              type: 'line',
              data: activeUser,
              lineStyle:{
                normal:{
                  color:'#99ff00'
                }
              },
              itemStyle:{
                normal:{
                  color:'#99ff00'
                }
              },
              symbol: 'none'
            }

          ]
        };

        var line6Xdata = [];
        RegisteredUser.forEach(function(item){
          var date = _self.sysMonitorService.monthInEn(item.date);
          line6Xdata.push(date);
        });

        this.line6Chart = {
          title: {
            text: '',
            subtext: '',
            x: "center"
          },
          tooltip: {
            trigger: 'axis'
          },
          xAxis: {
            axisLabel: {color: '#808080'},
            axisLine: {show: false},
            axisTick: {show: false},
            type: 'category',
            boundaryGap: false,
            data:['Jan','Feb','Mar','Apr','May','June','July','Aug','Sept','Oct','Nov','Dec']
          },

          yAxis : [
            {
              axisLine: {show: false},
              axisTick: {show: false},
              type : 'value',
              axisLabel : {
                formatter: '{value}',
                textStyle: {
                  color: '#808080'
                }
              }
            }
          ],
          series: [
            {
              name: 'Registered',
              type: 'line',
              data: RegisteredUser,
              lineStyle:{
                normal:{
                  color:'#99ff00'
                }
              },
              itemStyle:{
                normal:{
                  color:'#99ff00'
                }
              },
              symbol: 'none'
            },
            {
              name: 'AllRegistered',
              type: 'line',
              data: AllRegisteredUser,
              lineStyle:{
                normal:{
                  color:'#ffd153'
                }
              },
              itemStyle:{
                normal:{
                  color:'#ffd153'
                }
              },
              symbol: 'none'
            }

          ]
        };
      },
        error => {
        console.log('22222');
        console.log(error);
      }
    );

    this.sysMonitorService.getTradeOrderInfo({}).subscribe(
        res => {
          console.log(res);
        this.hasLine7Chart = true;
        this.hasBar8Chart = true;
        this.hasLine9Chart = true;
        this.hasBar10Chart = true;
        this.tradeOrderInfo = res.retbody.getTradeOrderInfo;
        this.setBar8Chart(0);
        this.setBar10Chart(0);

        let trade = res.retbody.getTradeOrderInfo.trade;
        this.tradeToday = trade.tradeToday;
        let tradeNums=res.retbody.getTradeOrderInfo.trade.tradeNums;
        var tradexAxis = [];
        var tradeSeries = [];
        tradeNums.forEach(function(item){
          tradeSeries.push(Number(item.value))
          var date = _self.sysMonitorService.monthInEn(item.date);
          tradexAxis.push(date);
        })
        this.line7Chart = {
          grid:{
            x:"4%",
            top:"45%",
            height:"45%",
            containLabel:true
          },
          tooltip: {
            trigger: 'axis'
          },
          xAxis: {
            axisLine: {show: false},
            axisTick: {show: false},
            axisLabel: {
              color: '#808080',
              interval: 3,
              rotate: -60,
            },
            type: 'category',
            boundaryGap: false,
            data:tradexAxis
          },

          yAxis : [
            {
              axisLine: {show: false},
              axisTick: {show: false},
              type : 'value',
              axisLabel : {
                formatter: '{value}',
                textStyle: {
                  color: '#808080'
                }
              }
            }
          ],
          series: [
            {
              name: 'Trade Amount',
              type: 'line',
              data: tradeSeries,
              lineStyle:{
                normal:{
                  color:'#ffd153'
                }
              },
              symbol: 'none'
            }

          ]
        };

        let orderNums=res.retbody.getTradeOrderInfo.order.orderNums;
        this.orderToday = this.tradeOrderInfo.order.orderToday;
        var orderxAxis = [];
        var orderSeries = [];
        orderNums.forEach(function(item){
          orderSeries.push(Number(item.value))
          var date = _self.sysMonitorService.monthInEn(item.date);
          orderxAxis.push(date);
        })
        this.line9Chart = {
          grid:{
            x:"4%",
            top:"45%",
            height:"45%",
            containLabel:true
          },
          tooltip: {
            trigger: 'axis'
          },
          xAxis: {
            axisLine: {show: false},
            axisTick: {show: false},
            axisLabel: {
              color: '#808080',
              interval: 3,
              rotate: -60,
            },
            type: 'category',
            boundaryGap: false,
            data:orderxAxis
          },

          yAxis : [
            {
              axisLine: {show: false},
              axisTick: {show: false},
              type : 'value',
              axisLabel : {
                formatter: '{value}',
                textStyle: {
                  color: '#808080'
                }
              }
            }
          ],
          series: [
            {
              name: 'Order Quantity',
              type: 'line',
              data: orderNums,
              lineStyle:{
                normal:{
                  color:'#ff9900'
                }
              },
              symbol: 'none'
            }

          ]
        }
      },
        error => {
        console.log('22222');
        console.log(error);
        this.router.navigate(['login']);
      }
    );

  }
  //绘制第4个图形-地图
  setPie4Chart(data:any){
    var geoCoordMap = {
      '西藏藏族自治区': [91.11, 29.97],
      '西藏自治区': [91.11, 29.97],
      '上海市': [121.48, 31.22],
      '福建省': [119.3, 26.08],
      '广西壮族自治区': [108.33, 22.84],
      '广西自治区': [108.33, 22.84],
      '广东省': [113.23, 23.16],
      '山西省': [112.53, 37.87],
      '云南省': [102.73, 25.04],
      '海南省': [110.35, 20.02],
      '辽宁省': [123.38, 41.8],
      '吉林省': [125.35, 43.88],
      '宁夏回族自治区': [106.27, 38.47],
      '宁夏自治区': [106.27, 38.47],
      '江西省': [115.89, 28.68],
      '青海省': [101.74, 36.56],
      '内蒙古自治区': [111.65, 40.82],
      '四川省': [104.06, 30.67],
      '陕西省': [108.95, 34.27],
      '重庆市': [106.54, 29.59],
      '江苏省': [118.78, 32.04],
      '贵州省': [106.71, 26.57],
      '北京市': [116.46, 39.92],
      '新疆维吾尔族自治区': [87.68, 43.77],
      '新疆自治区': [87.68, 43.77],
      '浙江省': [120.19, 30.26],
      '山东省': [117, 36.65],
      '甘肃省': [103.73, 36.03],
      '天津市': [117.2, 39.13],
      '河南省': [113.65, 34.76],
      '黑龙江省': [126.63, 45.75],
      '河北省': [114.48, 38.03],
      '湖南省': [113, 28.21],
      '安徽省': [117.27, 31.86],
      '湖北省': [114.31, 30.52],


      '西藏': [91.11, 29.97],
      '上海': [121.48, 31.22],
      '福建': [119.3, 26.08],
      '广西': [108.33, 22.84],
      '广东': [113.23, 23.16],
      '山西': [112.53, 37.87],
      '云南': [102.73, 25.04],
      '海南': [110.35, 20.02],
      '辽宁': [123.38, 41.8],
      '吉林': [125.35, 43.88],
      '宁夏': [106.27, 38.47],
      '江西': [115.89, 28.68],
      '青海': [101.74, 36.56],
      '内蒙古': [111.65, 40.82],
      '四川': [104.06, 30.67],
      '陕西': [108.95, 34.27],
      '重庆': [106.54, 29.59],
      '江苏': [118.78, 32.04],
      '贵州': [106.71, 26.57],
      '北京': [116.46, 39.92],
      '新疆': [87.68, 43.77],
      '浙江': [120.19, 30.26],
      '山东': [117, 36.65],
      '甘肃': [103.73, 36.03],
      '天津': [117.2, 39.13],
      '河南': [113.65, 34.76],
      '黑龙江': [126.63, 45.75],
      '河北': [114.48, 38.03],
      '湖南': [113, 28.21],
      '安徽': [117.27, 31.86],
      '湖北': [114.31, 30.52]
    };

    var convertData = function (data) {
      var res = [];
      for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
          res.push({
            name: data[i].name,
            value: geoCoord.concat(data[i].value).concat(data[i].top)
          });
        }
      }
      return res;
    };

    var option = {
      //backgroundColor: '#404a59',
      title: {
        text: '',
        subtext: '',
        left: 'center',
        textStyle: {
          color: '#fff'
        }
      },
      tooltip: {
        trigger: 'item',
        formatter:function (a,b,c) {
          return a.name + ':' + a.value[2];
        }
      },
      legend: {
        orient: 'vertical',
        y: 'bottom',
        x: 'right',
        data: [''],
        textStyle: {
          color: '#fff'
        }
      },
      geo: {
        map: 'china',
        label: {
          emphasis: {
            show: false
          }
        },
        zoom: 1.3,
        roam: true,
        itemStyle: {
          normal: {
            areaColor: '#323c48',
            borderColor: '#111',
          },
          emphasis: {
            areaColor: '#2a333d'
          }
        }
      },
      series: [
        {
          name: '',
          type: 'scatter',
          coordinateSystem: 'geo',
          data: convertData(data),
          symbolSize: function (val) {
            //if(val[3]===1 ){
            //  return 60/3;
            //} else if(val[3]===2){
            //  return 34/3;
            //}else if(val[3]===3){
            //  return 24/3;
            //}else if(val[3]===4){
            //  return 14/3;
            //} else {
              return 0.001;
            //}
          },
          hoverAnimation: true,
          label: {
            normal: {
              formatter: function (params) {
                return params.name
                  //+
                  //params.value[2];
              },
              position: 'top',
              show: true,
              color:'#808080'
            }
          }
          //,
          //itemStyle: {
          //  normal: {
          //    color: '#fff',
          //  }
          //}
        },
        {
          name: '',
          type: 'scatter',
          coordinateSystem: 'geo',
          data: convertData(data),
          symbolSize: function (val) {
            if(val[3]===1 ){
              return 60/2;
            } else if(val[3]===2){
              return 34/2;
            }else if(val[3]===3){
              return 24/2;
            }else if(val[3]===4){
              return 14/2;
            } else {
              return 0.001;
            }
            //return 0.1;
          },
          hoverAnimation: true,
          label: {
            normal: {
              formatter: function (params) {
                return params.value[2];
              },
              position: 'center',
              show: true,
              color:'#ffffff'
            },
            emphasis: {
              show: true
            }
          }
          //,
          //itemStyle: {
          //  normal: {
          //    color: '#fff',
          //  }
          //}
        },
        {
          name: '',
          type: 'scatter',
          coordinateSystem: 'geo',
          data: convertData(data),
          symbolSize: function (val) {
            if(val[3]===1 ){
              return 60/2;
            } else if(val[3]===2){
              return 34/2;
            }else if(val[3]===3){
              return 24/2;
            }else if(val[3]===4){
              return 14/2;
            } else {
              return 0.001;
            }
            //return 0.1;
          },
          hoverAnimation: true,
          label: {
            normal: {
              formatter: function (params) {
                return '';
              },
              position: 'center',
              show: true,
              color:'#ffffff'
            },
            emphasis: {
              show: true
            }
          }
          ,
          itemStyle: {
            normal: {
              color: 'rgba(241,89,79,0.50)',
            }
          }
        }
      ]
    };
    this.pie4Chart = option;
  }
  //绘制第8个柱形图-交易
  setBar8Chart(idx:number){
    this.bar8ChartIdx = idx;
    let monthKey = this.sysMonitorService.getMonthKey(idx).toString();
    let total = this.tradeOrderInfo.trade.tradeTop[idx][monthKey];
    let total_price = this.tradeOrderInfo.trade.tradeTop[idx].total_price;
    this.totalPrice = total_price;
    if(this.totalPrice.length > 15){
      this.totalPrice = this.totalPrice.substring(0,15)+"...";
    }
    var appusage_data = [
      {
        name: total[4].percent + " " + total[4].value,
        value: total[4].value
      }, {
        name: total[3].percent + " " + total[3].value,
        value: total[3].value
      }, {
        name: total[2].percent + " " + total[2].value,
        value: total[2].value
      }, {
        name: total[1].percent + " " + total[1].value,
        value: total[1].value
      }, {
        name: total[0].percent + " " + total[0].value,
        value: total[0].value
      }
    ];
    var option1 = {
      "tooltip": {
        "trigger": "axis",
        "axisPointer": { // 坐标轴指示器，坐标轴触发有效
          "type": "shadow" // 默认为直线，可选为："line" | "shadow"
        }
      },
      "grid": {
        "left": "4%",
        "top":"30%",
        "width":"70%",
        "height":"55%",
        "containLabel":true,
      },
      "yAxis": [{
        "type": "category",
        "data": [total[4].name, total[3].name, total[2].name, total[1].name,total[0].name],
        "axisLine": {
          "show": false
        },
        "axisTick": {
          "show": false,
          "alignWithLabel": true
        },
        "axisLabel": {
          "textStyle": {
            "color": "#808080"
          },
        }
      }],
      "xAxis": [{
        "type": "value",
        "axisLine": {
          "show": false
        },
        "axisTick": {
          "show": false
        },
        "axisLabel": {
          "show": false
        },
        "splitLine": {
          "show": false
        }
      }],

      "series": [{
        "name": "Amount",
        "type": "bar",
        "data": appusage_data,
        "barWidth":"60%",
        "label": {
          "normal": {
            "show": true,
            "position": "right",
            "formatter": function (params) {
              return params.data.name;
            },
            "textStyle": {
              //"color": "#bcbfff"
              "color": "#bcbfff" //color of value
            }
          }
        },
        "itemStyle": {
          "normal": {
            "color": "#ffd153"
          }
        }
      }]
    };
    this.bar8Chart = option1;
  }
  //绘制第10个柱形图-订单
  setBar10Chart(idx:number){
    this.bar10ChartIdx = idx;
    let monthKey = this.sysMonitorService.getMonthKey(idx).toString();
    let order = this.tradeOrderInfo.order.orderTop[idx][monthKey];
    let total_num = this.tradeOrderInfo.order.orderTop[idx].total_num;
    this.totalNum = total_num;
    var appusage_data10 = [
      {
        name: order[4].percent + " " + order[4].value,
        value: order[4].value
      }, {
        name: order[3].percent + " " + order[3].value,
        value: order[3].value
      }, {
        name: order[2].percent + " " + order[2].value,
        value: order[2].value
      }, {
        name: order[1].percent + " " + order[1].value,
        value: order[1].value
      }, {
        name: order[0].percent + " " + order[0].value,
        value: order[0].value
      }
    ];
    //10-dishizhangtu
    var option10 = {
      "tooltip": {
        "trigger": "axis",
        "axisPointer": { // 坐标轴指示器，坐标轴触发有效
          "type": "shadow" // 默认为直线，可选为："line" | "shadow"
        }
      },
      "grid": {
        "left": "4%",
        "top":"30%",
        "width":"70%",
        "height":"55%",
        "containLabel":true,
      },
      "yAxis": [{
        "type": "category",
        "data": [order[4].name, order[3].name, order[2].name, order[1].name, order[0].name],
        "axisLine": {
          "show": false
        },
        "axisTick": {
          "show": false,
          "alignWithLabel": true
        },
        "axisLabel": {
          "textStyle": {
            "color": "#808080"
          }
        }
      }],
      "xAxis": [{
        "type": "value",
        "axisLine": {
          "show": false
        },
        "axisTick": {
          "show": false
        },
        "axisLabel": {
          "show": false
        },
        "splitLine": {
          "show": false
        }
      }],

      "series": [{
        "name": "Amount",
        "type": "bar",
        "data": appusage_data10,
        "barWidth":"60%",
        "label": {
          "normal": {
            "show": true,
            "position": "right",
            "formatter": function (params) {
              return params.data.name;
            },
            "textStyle": {
              //"color": "#bcbfff"
              "color": "#bcbfff" //color of value
            }
          }
        },
        "itemStyle": {
          "normal": {
            "color": "#ff9900"
          }
        }
      }]
    };
    this.bar10Chart = option10;
  }
  //点击复选框
  selectCheckBox(check:Boolean,idx:number){

  }
}

