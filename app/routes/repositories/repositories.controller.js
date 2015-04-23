import angular from 'angular';
import 'angular-route';

import repoServiceModule from 'app/services/repo.service';

export default angular.module('repositoriesControllerModule', [
  'ngRoute',
  repoServiceModule.name
]).controller('RepositoriesController', function($routeParams, Repos) {
  this.name = $routeParams.name;

  Repos.getRepos(this.name).then((repos) => {
    this.repos = repos.data;
  });
});
