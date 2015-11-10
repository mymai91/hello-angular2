var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Component and bootstrap symbols from the Angular 2 library.
// @Component tells Angular that this class is an Angular component.
// @Component method has two field, a selector and a template.
var angular2_1 = require('angular2/angular2');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        angular2_1.Component({
            // The selector specifies a CSS selector for a host HTML element named my-app.
            // Angular creates and displays an instance of our AppComponent wherever it encounters a my-app elemen
            selector: 'my-app',
            // The template field is the component's companion template that tells Angular how to render a view.
            template: '<h1>My First Angular 2 App</h1>'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
// The bootstrap method tells Angular to start the application with this component at the application root.
angular2_1.bootstrap(AppComponent);
//# sourceMappingURL=app.js.map