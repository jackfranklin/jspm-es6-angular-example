import angular from 'angular';

export default angular.module('repoServiceModule', [
]).factory('Repos', function($http) {
  function getRepos(username) {
    let url = `https://api.github.com/users/${username}/repos`;
    return $http.get(url);
  }

  return {
    getRepos
  }
});
