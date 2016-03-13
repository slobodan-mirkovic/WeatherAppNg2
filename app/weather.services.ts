import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Rx';

@Injectable()

export class WeatherService{
     constructor(private _http: Http) { } 
    getWeather() {
         return this._http.get('http://api.openweathermap.org/data/2.5/find?lat=44.39&lon=20.26&cnt=10&appid=b1b15e88fa797225412429c1c50c122a')
      .map((response: Response) => response.json().list)
      .catch(this.handleError);
    }
      
        private handleError(error: Response) {
        console.error(error);
       return Observable.throw(error.json().error || 'Server error');
  }
                        
        
    }
}