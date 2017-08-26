   var customercontroller = function($scope, customerservice){
       $scope.info     = customerservice.getInfo();
   };
   
   app.controller("customercontroller", customercontroller);
