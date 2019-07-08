import { Component, OnInit } from '@angular/core';
import { TestService } from 'app/test.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  cities = [];
  constructor(testService: TestService, private router: Router) {
    testService.getCities().subscribe(res => {
      this.cities = res.json();
    });
  };

  showCity(city){
    debugger;
    this.router.navigate([city.name])
  }
}
