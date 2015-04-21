import angular from 'angular';
import indexRouteModule from 'app/routes/index/index.route';

var myApp = angular.module('openSauceApp', [
  'ngRoute',
  indexRouteModule.name
]);

angular.element(document).ready(function() {
  angular.bootstrap(document.querySelector('[data-main-app]'), [
    myApp.name
  ]);
});
