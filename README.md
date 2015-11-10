# Hello Angular2

> Angular 2 appeared, with structure is completely different toward Angular 1.x so cool. Writing base on JS ES6 structure, a lot of concepts is revised. Say Yah to start find out about it...

## Start

### Create a new folder to hold `hello-angular2 app`:

```
mkdir hello-angular2
```

### Go on `hello-angular2`

```
cd hello-angular2
```

### Install npm packages locally

At root folder `hello-angular2` we will install packages for project consist:
  * angular2 - The Angular 2 lib
  * systemjs - Provide module to loading
  * typescript - The TypeScript compiler
  * live-server - The static file server to live reload the browser when file change

```
npm init -y
npm install angular2@2.0.0-alpha.44 systemjs@0.19.2 --save --save-exact
npm i typescript --save-dev
npm i live-server --save-dev
```

when we done install `npm` packages, go to package.json and find block `scripts` to change the code into:

```
{
  "scripts": {
    "tsc": "tsc -p src -w",
    "start": "live-server --open=src"
  }
}
```

### Create a folder `src/app` to hold code of our app

```
mkdir src/app
```

### Write code now

Create a *app.ts* to write js

```
// Component and bootstrap symbols from the Angular 2 library.
import {Component, bootstrap} from 'angular2/angular2';

// @Component tells Angular that this class is an Angular component.
// @Component method has two field, a selector and a template.
@Component({

  // The selector specifies a CSS selector for a host HTML element named my-app
  // Angular creates and displays an instance of our AppComponent wherever it encounters a my-app element
  selector: 'my-app',

  // The template field is the component's companion template that tells Angular how to render a view.
  template: '<h1>My First Angular 2 App</h1>'
})

// AppComponent is empty now, but in the next time if we expand our app. It will ready to build
class AppComponent { }

// The bootstrap method tells Angular to start the application with this component at the application root.
bootstrap(AppComponent);
```

Create a *index.html* to write html
```
<html>
  <head>
    <title>Hello Angular2</title>
    <script src="../node_modules/systemjs/dist/system.src.js"></script>
    <script src="../node_modules/angular2/bundles/angular2.dev.js"></script>
    <script>
      System.config({
        packages: {'app': {defaultExtension: 'js'}}
      });
      System.import('app/app');
    </script>
  </head>
  <body>
    <my-app>hello.</my-app> <!-- <my-app> tag in body it is my-app selector is defined in Component. The content define in template will include in to this <my-app> tag-->
  </body>
</html>
```

### TypeScript compilation

In terminal at hello-angular2/src. Create a file tsconfig.json to compilation

```
{
  "compilerOptions": {
    "target": "ES5",
    "module": "commonjs",
    "sourceMap": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "removeComments": false,
    "noImplicitAny": false
  }
}
```

**Compile**
In terminal, at root folder (hello-angular2) run
```
npm run tsc
```
It will generate app.js and app.map.js it help debug between JS and TypeScript source

To exit, at terminal press button `Ctrl-C `

### Run app
In terminal at root folder run. In a few moments
Yah you will see result in a few moments... Great ^_^
```
npm start
```

#### This example base on 5 min quickstart on site angular.io hehe but to me, I do it over 5 mins. Anyway,
It good to me know more.

### Thanks tutorial from Angulario

# Clone my code, How to run

## Clone my code

```
git clone git@github.com:mymai91/hello-angular2.git
```

## Install packages

```
npm install
```

## Run app

```
npm start
```
