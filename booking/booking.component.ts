import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoggingService } from '../logging.service';
import { NgForm } from '@angular/forms';
import { BookingService } from './booking.service';
import { Subscription } from 'rxjs';
import { Driver } from './drivers.model';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  drivers: Driver[] = [];
  private driversSub: Subscription;

  constructor(private router: Router,
              private bookService: BookingService,
              private logService: LoggingService) { }

  ngOnInit() {
    this.bookService.getDrivers();
    this.driversSub = this.bookService.getDriverUpdateListener()
    .subscribe((drivers: Driver[]) => {
      this.drivers = drivers;
    });
  }

  onSubmit(form: NgForm) {
      if(!form.valid) {
        return;
      }
    // const driverName = form.value.driver1;
    if(!this.logService.isLogin){
      this.logService.isSignin = true;
      this.router.navigateByUrl('/signup');
    } else {
      // this.bookService.driverDetails(driverName);
      this.router.navigateByUrl('/tripdetails');
    }
    form.resetForm();
  }
}
