// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //apiUrl: 'http://localhost:8080',
  url1: "http://localhost:8081",
  url2: "http://localhost:4220",
  url3: "http://localhost:4230",

  application:
  {
    name: 'SECOND-BANKERS',
    angular: 'Angular 10.0.14',
    bootstrap: 'Bootstrap 4.5.2',
    fontawesome: 'Font Awesome 5.14.0',
  }

}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
