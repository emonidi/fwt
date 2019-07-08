import { Component, OnInit, Input, SimpleChange, OnChanges } from '@angular/core';

@Component({
  selector: 'app-small-city-card',
  templateUrl: './small-city-card.component.html',
  styleUrls: ['./small-city-card.component.css']
})
export class SmallCityCardComponent implements OnInit {

  @Input('city') city: any;
  constructor() {
    console.log(this.city)
  }

  ngOnInit() {
    // this.city.backgroundImage = `url(${this.city.image})`;
  }

  ngOnChanges(changes: any) {
    this.city = changes.city.currentValue;
    this.city.backgroundImage =  `url(${this.city.image})`
  }

}
