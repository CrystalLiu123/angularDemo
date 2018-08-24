//var app = angular.module('MyApp', ['treeControl','ui.bootstrap']);
var app = angular.module('MyApp', ['treeControl']);
//配置
app.controller("myCtrl", ["$scope", function($scope) {
    $scope.treeOptions = {
            nodeChildren: "list", //每个孩子节点的属性名，默认是children
            dirSelectable: false, //是否可选中目录：true为点击目录名为选择，点击目录图标才为展开
        }
        //数据
    $scope.dataForTheTree = [{
        "name": "Class 3",
        "grade": "66.6",
        "list": [{
            "name": "Group 5",
            "grade": "70.1",
            "list": []
        }, {
            "name": "li",
            "grade": "80",
            "list": [{
                "name": "limin",
                "grade": "60",
                "list": [{
                    "name": "limin4",
                    "grade": "65",
                    "list": []
                }, {
                    "name": "limin5",
                    "grade": "63",
                    "list": []
                }]
            }]
        }]
    }, {
        "name": "Class 2",
        "grade": "67.9",
        "list": [{
            "name": "zhang",
            "grade": "70",
            "list": []
        }]
    }, {
        "name": "Class 1",
        "grade": "69.1",
        "list": [{
            "name": "wang",
            "grade": "70",
            "list": []
        }]
    }, ]

}]);