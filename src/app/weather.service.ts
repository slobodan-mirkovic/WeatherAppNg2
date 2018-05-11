import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError as observableThrowError } from 'rxjs';
 
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

    private weatherUrl = 'http://api.openweathermap.org/data/2.5/find?lat=44.39&lon=20.26&cnt=10&appid=8e200a8cf713820d46d186869d7a4dcb';

    getWeather () {
      return this.http.get<any>(this.weatherUrl);

    }

    private handleError(res: HttpErrorResponse | any) {
      console.error(res.error || res.body.error);
      return observableThrowError(res.error || 'Server error');
    }

}
