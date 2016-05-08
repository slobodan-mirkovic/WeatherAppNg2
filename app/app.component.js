"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var weather_services_1 = require('./weather.services');
var stanica_component_1 = require('./stanica.component');
var http_1 = require('@angular/http');
var AppComponent = (function () {
    function AppComponent(_weatherService) {
        this._weatherService = _weatherService;
    }
    AppComponent.prototype.ngOnInit = function () { this.getHeroes(); };
    AppComponent.prototype.getHeroes = function () {
        var _this = this;
        this._weatherService.getWeather()
            .subscribe(function (poruka) { return _this.poruka = poruka; });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './app/app.component.html',
            directives: [stanica_component_1.StanicaComponent],
            providers: [http_1.HTTP_PROVIDERS, weather_services_1.WeatherService]
        }), 
        __metadata('design:paramtypes', [weather_services_1.WeatherService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map