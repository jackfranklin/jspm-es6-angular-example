import angular from 'angular';
import routesModule from './routes';

var myApp = angular.module('openSauceApp', [
  routesModule.name
]);

angular.element(document).ready(function() {
  angular.bootstrap(document.querySelector('[data-main-app]'), [
    myApp.name
  ]);
});
