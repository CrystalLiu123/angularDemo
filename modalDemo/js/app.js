angular.module('ui.bootstrap.demo', ['ui.bootstrap', 'modalCtrl']).controller('ModalDemoCtrl', function($scope, $uibModal, $log) {
    $scope.grades = [89, 90, 88, 87, 86];
    $scope.data = {
        id: $scope.id,
        grades: $scope.grades
    }
    $scope.openWindow = function(size) {
        var modalInstance = $uibModal.open({
            templateUrl: './modal/modal.html',
            controller: 'ModalInstanceCtrl',
            backdrop: true,
            backdropClass:'backdrop',
            openedClass: 'bodyclass',
            //windowClass: 'windclass',
            size:size,
            animation: true,
            resolve: {
                params: function() {
                    return $scope.data;
                },
                params2: function(){
                    return $scope.data;
                }
            }
        });
        modalInstance.result.then(function(result) {
            $scope.value = result.value;
            $scope.name = result.name;
            $scope.age = result.age;
        }, function(reason) {
            $log.info('Modal ' + reason + ' at ' + new Date());
        });
    };
});