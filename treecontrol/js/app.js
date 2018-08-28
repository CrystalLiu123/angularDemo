var app = angular.module('MyApp', ['treeControl']);
//配置
app.controller("myCtrl", ["$scope", "$http", function($scope, $http) {
    $scope.treeOptions = {
            nodeChildren: "list", //每个孩子节点的属性名，默认是children
            dirSelectable: true, //是否可选中目录：true为点击目录名为选择，点击目录图标才为展开
            multiSelection: true  //是否多选node
        }
        //数据
    $scope.data = {};
    queryData();
    /*查询数据*/
    $scope.queryData = queryData;

    function queryData() {
        $http.get("data/data.json").success(function(data) {
            $scope.data.dataForTheTree = data;
        });
    }
    
    /*选择node触发事件 */
    $scope.showSelected = showSelected;
    function showSelected(node){
        console.log(node);
    }
}]);