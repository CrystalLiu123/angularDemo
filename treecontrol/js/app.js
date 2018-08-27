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
        // var req = new XMLHttpRequest();
        // req.open("GET", "../data/data.json", true);
        // req.addEventListener("load", function() {
        //     if (req.status < 404)
        //         callback("yes");
        // })
        // req.send(null);
        // $scope.data.dataForTheTree = JSON.parse(req.responseText);

        // $.ajax({       //使用ajax解决同源请求(火狐、IE可以。chrome、360不能访问file://)
        //     type: 'get',
        //     url: '../data/data.json',
        //     dataType: 'JSONP', //JSONP格式只能使用GET请求
        //     success: function(data) {
        //         $scope.data.dataForTheTree = data;
        //     }
        // })

        $http.post("data/data.json").success(function(data) {
            $scope.data.dataForTheTree = data;
        });
    }
    
    /*选择node触发事件 */
    $scope.showSelected = showSelected;
    function showSelected(node){
        console.log(node);
    }
}]);