import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

    private weatherUrl = 'https://api.openweathermap.org/data/2.5/find?lat=44.39&lon=20.26&cnt=10&appid=8e200a8cf713820d46d186869d7a4dcb';

    getWeather () {
      return this.http.get<any>(this.weatherUrl);
    }

}
