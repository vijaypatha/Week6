angular.module("appName").controller("mainCtrl", function($scope) {
    $scope.test = "Yes! its working :)";
    $scope.niceList = [];
    $scope.naughtyList = [];
    $scope.getPersons = function() {
            var netScore = $scope.niceScore - $scope.naughtyScore;
            if (netScore >= 10) {
                $scope.niceList.push({
                    name: $scope.member
                });
            } else {
                $scope.naughtyList.push({
                    name: $scope.member
                });
            }

        } //getPersons function
}); //controller
