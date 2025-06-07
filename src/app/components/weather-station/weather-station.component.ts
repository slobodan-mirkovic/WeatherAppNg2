import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-weather-station',
  templateUrl: './weather-station.component.html',
styleUrls: ['./weather-station.component.css'],
  imports: [ CommonModule ]
})
export class WeatherStationComponent {

  @Input() weatherStation: any;
  public toggle = false;
  
      
   public pravacStr = function (pravac : number): string {
                      var pravacVet = "";
                      if (pravac > 22.5 && pravac <= 67.5)
                          pravacVet = "Severoistočni";
                      else if (pravac > 67.5 && pravac <= 112.5)
                          pravacVet = "Istočni";
                      else if (pravac > 112.5 && pravac <= 157.5)
                          pravacVet = "Jugoistočni";
                      else if (pravac > 157.5 && pravac <= 202.5)
                          pravacVet = "Južni";
                      else if (pravac > 202.5 && pravac <= 247.5)
                          pravacVet = "Jugozapadni";
                      else if (pravac > 247.5 && pravac <= 292.5)
                          pravacVet = "Zapadni";
                      else if (pravac > 292.5 && pravac <= 337.5)
                          pravacVet = "Severozapadni";
                      else if (pravac > 337.5)
                          pravacVet = "Severni";
                      else if (pravac <= 22.5)
                          pravacVet = "Severni";
                      else
                          pravacVet = "";
                      return pravacVet;
                  }
}