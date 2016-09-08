import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';



@Injectable()
export class WeatherService{
  
  private weatherUrl = 'http://api.openweathermap.org/data/2.5/find?lat=44.39&lon=20.26&cnt=10&appid=8e200a8cf713820d46d186869d7a4dcb';

  constructor(private http: Http) { }

  getWeather(): Promise<any> {
    return this.http.get(this.weatherUrl)
      .toPromise()
      .then(response => response.json().list)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }                          
        
}
