import angular from 'angular';
import 'angular-route';

export default angular.module('repositoriesControllerModule', [
  'ngRoute'
]).controller('RepositoriesController', function($routeParams) {
  this.name = $routeParams.name;
});
