import { Injectable } from '@angular/core';
import { Driver } from './drivers.model';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class BookingService{
  private drivers: Driver[] = [];
  private driversUpdated = new Subject<Driver[]>();

  constructor(private http: HttpClient) {}


  getDrivers() {
    this.http.get<{message: string, drivers: Driver[]}>('http://localhost:3000/api/booking')
    .subscribe((driverData) => {
      this.drivers = driverData.drivers;
      this.driversUpdated.next([...this.drivers]);
    });
  }

  getDriverUpdateListener(){
    return this.driversUpdated.asObservable();
  }

  driverDetails(driverName: string){
    
  }
}