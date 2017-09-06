angular.module('myApp', [])
.controller('topController',['$scope',function($scope){
    $scope.title = "My Education Library";
    $scope.subheading = "What is under my scope";

}]);