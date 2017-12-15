var express = require('express');
var app = express();
var port = 3000;

var cors = require('cors');
var bodyParser = require('body-parser')

app.use(cors());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use('/*', function (req, res, next) {
  res.header("authentication", "eyJhbGciOiJIUzI1NiJ9.eyJsLWxldiI6IkhtYWNTSEEyNTYiLCJpc3MiOiJjNjA0NGU4YS01ODQ0LTExZTYtODY2My1hMDk5OWIwOGE3N2IiLCJleHAiOjE0OTEwMzMxMDIsImp0aSI6ImUwNDcyNGJmLWU0ODAtNGVkZS1iY2IxLTM3NjY0ZWFhYmFmNiJ9.5VnZ4nRpqKv6NC2QfggkjetTm2zAVVj5zZkPteHjBrQ");
  next();
})

//登录
app.post('/reg/employee/login',function(req, res){
  var result = {
    "code": 0,
    "detail": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MDg0NzMzNzcsIm5hbWUiOiJ6aGFuZ3lvbmdfbmV3IiwidXNlcl9pZCI6MX0.1dc_hmifgwd0kDMdZXiPbO82wlbCwSHBj7dv07mz-xk"
  }
  res.json(result);
})


app.post('/wholesale_dashboard/getUserInfo',function(req,res){
  var result = {};
  result.retbody = {};
  result.retbody.getUserInfo = {
    "location":
      [
        {name: '拉萨', value: 24},
        {name: '上海', value: 25},
        {name: '福州', value: 29},
        {name: '南宁', value: 37},
        {name: '广州', value: 38},
        {name: '太原', value: 39},
        {name: '昆明', value: 39},
        {name: '海口', value: 44},
        {name: '沈阳', value: 50},
        {name: '长春', value: 51},
        {name: '银川', value: 52},
        {name: '南昌', value: 54},
        {name: '西宁', value: 57},
        {name: '呼和浩特', value: 58},
        {name: '成都', value: 58},
        {name: '西安', value: 61},
        {name: '重庆', value: 66},
        {name: '南京', value: 67},
        {name: '贵阳', value: 71},
        {name: '北京', value: 79},
        {name: '乌鲁木齐', value: 84},
        {name: '杭州', value: 84},
        {name: '济南', value: 92},
        {name: '兰州', value: 99},
        {name: '天津', value: 105},
        {name: '郑州', value: 113},
        {name: '哈尔滨', value: 114},
        {name: '石家庄', value: 147},
        {name: '长沙', value: 175},
        {name: '合肥', value: 229},
        {name: '武汉', value: 273}
      ],
    "userQty":['0','30000','60000','100000','100000'],
    "activeUser":
      [
        {data: 'Jan1', value: 24},
        {data: 'Jan2', value: 25},
        {data: 'Jan3', value: 29},
        {data: 'Jan4', value: 37},
        {data: 'Jan5', value: 38},
        {data: 'Jan6', value: 39},
        {data: 'Jan7', value: 39},
        {data: 'Jan8', value: 44},
        {data: 'Jan9', value: 50},
        {data: 'Jan10', value: 51},
        {data: 'Jan11', value: 51},
        {data: 'Jan12', value: 80}
        /*{data: 'Jan7', value: 52},
         {data: 'Jan7', value: 54},
         {data: 'Jan7', value: 57},
         {data: 'Jan7', value: 58},
         {data: 'Jan7', value: 58},
         {data: 'Jan7', value: 61},
         {data: 'Jan7', value: 66},
         {data: 'Jan7', value: 67},
         {data: 'Jan7', value: 71},
         {data: 'Jan7', value: 79},
         {data: 'Jan7', value: 84},
         {data: 'Jan7', value: 84},
         {data: 'Jan7', value: 92},
         {data: 'Jan7', value: 99},
         {data: 'Jan7', value: 105},
         {data: 'Jan7', value: 113},
         {data: 'Jan7', value: 114},
         {data: 'Jan7', value: 147},
         {data: 'Jan7', value: 175},
         {data: 'Jan7', value: 229},*/

      ],
    "RegisteredUser":
      [
        {data: 'Jan1', value: 14},
        {data: 'Jan2', value: 55},
        {data: 'Jan3', value: 19},
        {data: 'Jan4', value: 17},
        {data: 'Jan5', value: 21},
        {data: 'Jan6', value: 39},
        {data: 'Jan7', value: 3},
        {data: 'Jan8', value: 14},
        {data: 'Jan9', value: 50},
        {data: 'Jan10', value: 11},
        {data: 'Jan11', value: 21},
        {data: 'Jan12', value: 51}
      ],
    "AllRegisteredUser":
      [
        {data: 'Jan1', value: 14},
        {data: 'Jan2', value: 55},
        {data: 'Jan3', value: 19},
        {data: 'Jan4', value: 17},
        {data: 'Jan5', value: 21},
        {data: 'Jan6', value: 39},
        {data: 'Jan7', value: 3},
        {data: 'Jan8', value: 14},
        {data: 'Jan9', value: 50},
        {data: 'Jan10', value: 11},
        {data: 'Jan11', value: 21},
        {data: 'Jan12', value: 51}
      ]



  }


  res.json(result);
});

app.post('/wholesale_dashboard/getTradeOrderInfo',function(req,res){
  var result = {};
  result.retbody = {};
  result.retbody.getTradeOrderInfo = {
    "trade": {
      "tradeToday": '43,505',
      "tradeNums": [
        {data: 'Jan1', value: 114},
        {data: 'Jan2', value: 125},
        {data: 'Jan3', value: 119},
        {data: 'Jan4', value: 37},
        {data: 'Jan5', value: 38},
        {data: 'Jan6', value: 59},
        {data: 'Jan7', value: 39},
        {data: 'Jan8', value: 14},
        {data: 'Jan9', value: 50},
        {data: 'Jan10', value: 11},
        {data: 'Jan11', value: 21},
        {data: 'Jan12', value: 51},
      ],
      "tradeTop":
        [
          { "total_price":12340000,
            "total":[
              {name:'Company1', percent:'82%', value:156},
              {name:'Company2', percent:'62%', value:123},
              {name:'Company3', percent:'32%', value:96},
              {name:'Company4', percent:'12%', value:67},
              {name:'Company5', percent:'2%', value:52}
            ]
          },
          { "total_price":12340000,
            "1month":[
              {name:'Company1', percent:'82%', value:156},
              {name:'Company2', percent:'62%', value:123},
              {name:'Company3', percent:'32%', value:96},
              {name:'Company4', percent:'12%', value:67},
              {name:'Company5', percent:'2%', value:52}
            ]
          },
          { "total_price":12340000,
            "3month":[
              {name:'Company1', percent:'82%', value:156},
              {name:'Company2', percent:'62%', value:123},
              {name:'Company3', percent:'32%', value:96},
              {name:'Company4', percent:'12%', value:67},
              {name:'Company5', percent:'2%', value:52}
            ]
          },
          { "total_price":12340000,
            "6month":[
              {name:'Company1', percent:'82%', value:156},
              {name:'Company2', percent:'62%', value:123},
              {name:'Company3', percent:'32%', value:96},
              {name:'Company4', percent:'12%', value:67},
              {name:'Company5', percent:'2%', value:52}
            ]
          },

        ],
    },
    "order": {
      "orderToday": '13,505',
      "orderNums": [
        {data: 'Jan1', value: 114},
        {data: 'Jan2', value: 125},
        {data: 'Jan3', value: 109},
        {data: 'Jan4', value: 307},
        {data: 'Jan5', value: 380},
        {data: 'Jan6', value: 509},
        {data: 'Jan7', value: 439},
        {data: 'Jan8', value: 514},
        {data: 'Jan9', value: 550},
        {data: 'Jan10', value: 611},
        {data: 'Jan11', value: 621},
        {data: 'Jan12', value: 651},
      ],
      "orderTop":
        [
          { "total_num":35005,
            "total":[
              {name:'Company1', percent:'72%', value:996},
              {name:'Company2', percent:'62%', value:129},
              {name:'Company3', percent:'42%', value:86},
              {name:'Company4', percent:'32%', value:37},
              {name:'Company5', percent:'22%', value:32}
            ]
          },
          { "1month_price":12340000,
            "1month":[
              {name:'Company1', percent:'82%', value:156},
              {name:'Company2', percent:'62%', value:123},
              {name:'Company3', percent:'32%', value:96},
              {name:'Company4', percent:'12%', value:67},
              {name:'Company5', percent:'2%', value:52}
            ]
          },
          { "total_num":12340000,
            "3month":[
              {name:'Company1', percent:'82%', value:156},
              {name:'Company2', percent:'62%', value:123},
              {name:'Company3', percent:'32%', value:96},
              {name:'Company4', percent:'12%', value:67},
              {name:'Company5', percent:'2%', value:52}
            ]
          },
          { "total_num":12340000,
            "6month":[
              {name:'Company1', percent:'82%', value:156},
              {name:'Company2', percent:'62%', value:123},
              {name:'Company3', percent:'32%', value:96},
              {name:'Company4', percent:'12%', value:67},
              {name:'Company5', percent:'2%', value:52}
            ]
          }

        ]
    }


  }


  res.json(result);
});


app.post('/wholesale_dashboard/getPlatformInfo',function(req,res){
  var result = {};
  result.retbody = {};
  result.retbody.getTradeOrderInfo = {
    "host": {
      "cur": 140,
      "total": 200,
      "perecnt":"70%"
    },
    "cpu": {
      "cur": 4,
      "total": 8,
      "perecnt":"50%"
    },
    "memory": {
      "cur": 23000,
      "total": 100000,
      "perecnt":"25%"
    },
    "pv":{
      "today":"2000",
      "lastMonth":[
        {data: 'Jan1', value: 114},
        {data: 'Jan2', value: 125},
        {data: 'Jan3', value: 109},
        {data: 'Jan4', value: 307},
        {data: 'Jan5', value: 380},
        {data: 'Jan6', value: 509},
        {data: 'Jan7', value: 439},
        {data: 'Jan8', value: 514},
        {data: 'Jan9', value: 550},
        {data: 'Jan10', value: 611},
        {data: 'Jan11', value: 621},
        {data: 'Jan12', value: 651},
      ],

    },
    "dataVolumn":"63,500,500"

  }


  res.json(result);
});

app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(errorHandler);

function errorHandler(err, req, res, next) {
  var error = {
    errorCode: "500",
    errorMessage: "call api error"
  }
  res.status(500);
  res.json(error);
}

app.listen(port, function () {
  console.log('server start, listen on port ' + port);
});
