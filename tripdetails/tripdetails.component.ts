import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { TripDetailsService } from './trip-details.service';

@Component({
  selector: 'app-tripdetails',
  templateUrl: './tripdetails.component.html',
})
export class TripdetailsComponent implements OnInit {

  constructor(private router: Router,
              private tripDataService: TripDetailsService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    if(!form.valid) {
      return;
    }
  const email = form.value.email;
  const phone = form.value.phone;
  const pickupLoc = form.value.pickLoc;
  const pickTime = form.value.pickTime;
  this.tripDataService.tripInfo(email,phone,pickupLoc,pickTime);
  this.router.navigateByUrl('/payment');
  }
}
