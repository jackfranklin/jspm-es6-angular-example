import angular from 'angular';

export default angular.module('indexControllerModule', [
]).controller('IndexController', function() {
  console.log('I got run');
  this.foo = 2;
});
