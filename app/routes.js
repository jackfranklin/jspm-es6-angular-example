import angular from 'angular';

import indexControllerModule from 'app/routes/index/index.controller';
import repositoriesControllerModule from 'app/routes/repositories/repositories.controller';

import indexTemplate from 'app/routes/index/index.template.html!text';
import repositoriesTemplate from 'app/routes/repositories/repositories.template.html!text';

export default angular.module('appRoutesModule', [
  'ngRoute',
  indexControllerModule.name,
  repositoriesControllerModule.name
]).config(function($routeProvider) {
  $routeProvider.when('/', {
    template: indexTemplate,
    controller: 'IndexController',
    controllerAs: 'ctrl'
  }).when('/repositories/:name', {
    template: repositoriesTemplate,
    controller: 'RepositoriesController',
    controllerAs: 'ctrl'
  }).otherwise({
    redirectTo: '/'
  });
});
