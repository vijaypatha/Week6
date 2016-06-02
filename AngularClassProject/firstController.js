angular.module('angularIntro').controller('firstController', function($scope) {
    $scope.test = "Something Test" //$scope.html = whatever that html should be
    $scope.firstName = "Vijay"
    $scope.lastName = "Patha"
        // wrting a function
    $scope.alertMessage = function() {
        alert('Hello! Mr. ' + $scope.lastName);
    }

    $scope.greetings = ["hello", "Aloha", "Namaste", "Talofa", "Salam-Ma-Li-Kum"];

    $scope.people=[
      {
        name:'Sally Smit',
        age:44,
        city:'Orem',
        state:'UT',
        email:'dontemailme@gmail.com',
        //isNew=true
      },
      {
        name:'Donald Trump',
        age:4,
        city:'Crazy Town',
        state:'NY',
        email:'dontemailme@gmail.com',
        //isNew=false
      },
      {
        name:'Hillary Clinton',
        age:55,
        city:'Crazy Town',
        state:'NY',
        email:'myemailScandle@gmail.com',
      // isNew=true
      }
    ];

});
