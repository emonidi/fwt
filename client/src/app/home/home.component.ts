import { Component, OnInit } from '@angular/core';
import { TestService } from 'app/test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  cities = [];
  constructor(testService: TestService) {
    testService.getCities().subscribe(res => {
      this.cities = res.json();
    });
  };
}
