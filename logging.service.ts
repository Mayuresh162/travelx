import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class LoggingService{
  isLogin : boolean;
  isSignin: boolean;
  emailId: string;
  phoneNum: string;

  login(email: string, phone: string){
    this.emailId = email;
    this.phoneNum = phone;
  }

  signin(email: string, phone: string){
    this.emailId = email;
    this.phoneNum = phone;
  }
} 