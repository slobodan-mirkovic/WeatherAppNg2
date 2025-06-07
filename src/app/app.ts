import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherService } from './services/weather.service';
import { WeatherStationComponent } from './components/weather-station/weather-station.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, WeatherStationComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  public stations: any;

  constructor(private changeDetectorRefs: ChangeDetectorRef, private weatherService: WeatherService) {
  }

  ngOnInit(): void {
    this.refresh();
  }

  refresh() {      
      this.weatherService.getWeather().subscribe(data => {
      this.stations = data.list;
      console.log("stations", this.stations);
      this.changeDetectorRefs.detectChanges();
      });
  }
} 
