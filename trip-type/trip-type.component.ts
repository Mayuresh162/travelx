import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { NgForm } from '@angular/forms';
import { TripTypeService } from './trip-type.service';

@Component({
  selector: 'app-trip-type',
  templateUrl: './trip-type.component.html',
  styleUrls: ['./trip-type.component.css']
})
export class TripTypeComponent implements OnInit {
  isTick = false;
  brdPoint = "Bangalore";

  constructor(private router: Router,
              private tripService: TripTypeService) { }

  ngOnInit() {
  }
  
  onSubmit(form: NgForm) {
    if(!form.valid) {
      return;
    }
    const from = this.brdPoint;
    const to = form.value.to;
    const depDate = form.value.depDate;
    this.tripService.tripType(from,to,depDate);
    this.router.navigateByUrl('/booking');
    form.resetForm();
  }

  onTick(){
    this.isTick = true;
  }

}
