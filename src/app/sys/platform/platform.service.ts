import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Http, Response } from '@angular/http';
import * as Const from '../../config/const';

@Injectable()
export class PlatformService {
  constructor(public http: Http) { }

  public getPlatformInfo(json: any):Observable<any>{

    return this.http.post(Const.BACKEND_API_ROOT_URL + '/wholesale_dashboard/getPlatformInfo',{})
      .map((res: Response) => {
        return res.json();
      });
  }

  public login(json: any):Observable<any>{

    return this.http.post(Const.BACKEND_API_ROOT_URL + '/reg/employee/login',json)
      .map((res: Response) => {
        return res.json();
      });
  }

  public monthInEn(timestamp: Date){
    let date = new Date(Number(timestamp));
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];
    return months[date.getMonth()] + '' + date.getDate();
  }
}
