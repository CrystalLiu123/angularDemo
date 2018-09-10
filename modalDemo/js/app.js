angular.module('ui.bootstrap.demo', ['ui.bootstrap', 'app']).controller('ModalDemoCtrl', function($scope, $uibModal, $log) {
    $scope.id = '';
    $scope.grades = [89, 90, 88, 87, 86];
    $scope.data = {
        id: $scope.id,
        grades: $scope.grades
    }
    $scope.openWindow = function(size) {
        var modalInstance = $uibModal.open({
            templateUrl: './modal.html',
            controller: 'ModalInstanceCtrl',
            backdrop: "static",
            size: size,
            resolve: {
                params: function() {
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