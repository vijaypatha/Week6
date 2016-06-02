angular.module('simpleSite',[]).controller('siteController',function($scope){

$scope.test="Vijay";
// $scope.commentsArr = []
// ;
// $scope.commentFunc = function(){
//   $scope.commentsArr.push($scope.addComments);
// };
$scope.mycommentArr = [];
$scope.orderdComments = $scope.mycommentArr.reverse();
$scope.myfunction = function(){
  $scope.mycommentArr.push($scope.bindComments);
};



});

/*
module.controller("controllerName",function($scope){

});



*/
