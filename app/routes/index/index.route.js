import angular from 'angular';
import 'angular-route';

import indexControllerModule from 'app/routes/index/index.controller';

export default angular.module('indexRouteModule', [
  'ngRoute',
  indexControllerModule.name
]).config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'app/routes/index/index.template.html',
    controller: 'IndexController',
    controllerAs: 'ctrl'
  }).otherwise({
    redirectTo: '/'
  });
});
