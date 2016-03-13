System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var StanicaComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            StanicaComponent = (function () {
                function StanicaComponent() {
                    this.toggle = false;
                    this.pravacStr = function (pravac) {
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
                    };
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], StanicaComponent.prototype, "stanica", void 0);
                StanicaComponent = __decorate([
                    core_1.Component({
                        selector: 'stanica-com',
                        templateUrl: './app/stanica.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], StanicaComponent);
                return StanicaComponent;
            }());
            exports_1("StanicaComponent", StanicaComponent);
        }
    }
});
//# sourceMappingURL=stanica.component.js.map