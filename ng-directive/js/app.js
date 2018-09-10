var app = angular.module('myApp',['trsRadio']);
app.controller('myCtrl',function($scope){
    $scope.status = true;
    $scope.click = function(){      
        if($scope.status == true)
            $scope.status = false;
        else{
            $scope.status = true;
        }
    }
});