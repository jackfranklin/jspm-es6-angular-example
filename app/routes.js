import angular from 'angular';

import indexControllerModule from 'app/routes/index/index.controller';
import repositoriesControllerModule from 'app/routes/repositories/repositories.controller';

export default angular.module('appRoutesModule', [
  'ngRoute',
  indexControllerModule.name,
  repositoriesControllerModule.name
]).config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'app/routes/index/index.template.html',
    controller: 'IndexController',
    controllerAs: 'ctrl'
  }).when('/repositories/:name', {
    templateUrl: 'app/routes/repositories/repositories.template.html',
    controller: 'RepositoriesController',
    controllerAs: 'ctrl'
  }).otherwise({
    redirectTo: '/'
  });
});
