import {Component, OnInit} from '@angular/core';
import { LoginService } from './login.service';
import { LoginRequest  } from './model/login.request';
import { Router } from '@angular/router';


@Component({
  templateUrl: 'login.component.html',
  providers: [LoginService],
  styleUrls:['./login.component.scss']
})
export class LoginComponent {
  _checked:boolean;
  username:string;
  password:string;
  loginRequest: LoginRequest;
  constructor(private loginService: LoginService, private router: Router) {
    this._checked=true;
  }




  login(){



  }
  //   this.loginRequest = {
  //     // userName: username,
  //     // password: password
  //     company_account: 'test2017',
  //     // login_name: 'test2017',
  //     login_name: username,
  //     // password: '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92'
  //     password: password
  //   };
  //   localStorage.setItem('User', JSON.stringify(this.loginRequest));
  //   this.loginService.login(JSON.stringify(this.loginRequest)).subscribe(
  //     res=>{
  //       this.router.navigate(['sys/project']);
  //     },
  //     error=>{
  //       console.log(error);
  //       alert('用户名或密码错误');
  //     }
  //   )
  // }

}
