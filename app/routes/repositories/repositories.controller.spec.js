import angular from 'angular';
import 'angular-mocks';

import repositoriesControllerModule from './repositories.controller';

describe('RepositoriesController', function() {
  beforeEach(angular.mock.module(repositoriesControllerModule.name));

  var scope, $httpBackend;

  beforeEach(inject(function($injector, $controller) {
    scope = $injector.get('$rootScope').$new();
    $httpBackend = $injector.get('$httpBackend');

    $controller('RepositoriesController as ctrl', {
      $scope: scope,
      $routeParams: { name: 'jack' },
    });
  }));

  describe('fetching repos for the user', function() {
    beforeEach(function() {
      $httpBackend.
        expectGET('https://api.github.com/users/jack/repos').
        respond(200, [{ id: 1, name: 'foo' }]);
    });

    it('exports the user\'s name', function() {
      expect(scope.ctrl.name).toEqual('jack');
    });

    it('exports the repositories', function() {
      $httpBackend.flush();
      expect(scope.ctrl.repos).toEqual([{ id: 1, name: 'foo' }]);
    });
  });
});
