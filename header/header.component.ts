import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit{

  constructor(private logService: LoggingService){}

  ngOnInit(){}

  changeStatus(){
    this.logService.isLogin = true;
  }
}