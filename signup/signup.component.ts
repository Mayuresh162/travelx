import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoggingService } from '../logging.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})

export class SignupComponent implements OnInit {
 
  constructor(private router: Router,
              private logService: LoggingService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    if(!form.valid) {
      return;
    }
  const email = form.value.email;
  const phone = form.value.phone;
    if(this.logService.isLogin){
      this.logService.login(email,phone);
      this.router.navigateByUrl('/triptype')
    } 
    if(this.logService.isSignin){
      this.logService.signin(email,phone);
      this.router.navigateByUrl('/tripdetails');
    }
    form.resetForm();
  }
}
