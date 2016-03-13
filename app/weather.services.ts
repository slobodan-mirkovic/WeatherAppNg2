import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Rx';

@Injectable()

export class WeatherService{
     constructor(private _http: Http) { } 
    getWeather() {
         return this._http.get('http://api.openweathermap.org/data/2.5/find?lat=44.39&lon=20.26&cnt=10&appid=44db6a862fba0b067b1930da0d769e98')
      .map((response: Response) => response.json().list)
      .catch(this.handleError);
    }
      
        private handleError(error: Response) {
        console.error(error);
       return Observable.throw(error.json().error || 'Server error');
  }
                        
        
    }
}