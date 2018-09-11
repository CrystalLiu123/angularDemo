 angular.module('app', []).controller('ModalInstanceCtrl', function($scope, $uibModalInstance, params) {
    $scope.id = params.id;
    $scope.grades = params.grades;

    $scope.name = 'mao';
    $scope.age = '1';
    $scope.value = '';
    $scope.ok = function() {
        $uibModalInstance.close({
            name: $scope.name,
            age: $scope.age,
            value: $scope.value
        });
    }
    $scope.cancel = function() {
        $uibModalInstance.dismiss('canceled');
    }
    $scope.close = function() {
        $uibModalInstance.dismiss('closed');
    }
});