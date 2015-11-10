// Component and bootstrap symbols from the Angular 2 library.
// @Component tells Angular that this class is an Angular component.
// @Component method has two field, a selector and a template.
import {Component, bootstrap} from 'angular2/angular2';
@Component({
  // The selector specifies a CSS selector for a host HTML element named my-app.
  // Angular creates and displays an instance of our AppComponent wherever it encounters a my-app elemen
  selector: 'my-app',
  // The template field is the component's companion template that tells Angular how to render a view.
  template: '<h1>My First Angular 2 App</h1>'
})
class AppComponent { }
// The bootstrap method tells Angular to start the application with this component at the application root.
bootstrap(AppComponent);
