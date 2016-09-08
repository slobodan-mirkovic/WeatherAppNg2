import { Component } from '@angular/core';
import { WeatherService } from './weather.services';
import { OnInit } from '@angular/core';


@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    providers: [ WeatherService]
})
export class AppComponent implements OnInit {

  public podaci;

  constructor(private weatherService: WeatherService) {
  }

  getHeroes(): void {
    this.weatherService.getWeather().then(podaci => this.podaci = podaci);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

}
