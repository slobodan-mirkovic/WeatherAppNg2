import { Component } from '@angular/core';
import { WeatherService } from './weather.services';
import { StanicaComponent } from './stanica.component';
import { HTTP_PROVIDERS } from '@angular/http';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    directives: [StanicaComponent],
    providers: [HTTP_PROVIDERS, WeatherService]
})
export class AppComponent { 
    public poruka;
    
    constructor(private _weatherService: WeatherService){
    } 
    
     ngOnInit() { this.getHeroes(); }

  getHeroes() {
    this._weatherService.getWeather()
      .subscribe(
        poruka => this.poruka = poruka);
  }                   

}
