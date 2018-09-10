var app = angular.module('MyApp', ['treeControl']);
app.controller("myCtrl", ["$scope", "$http", function($scope, $http) {
    //配置
    $scope.treeOptions = {
            nodeChildren: "list", //每个孩子节点的属性名，默认是children
            dirSelectable: true, //是否可选中目录：true为点击目录名为选择，点击目录图标才为展开
            multiSelection: true,  //是否多选node
            injectClasses:{  //自定义样式
                "liSelected":"inject-isSelected",  
            }
            // isLeaf: function(node) {    //指定叶子节点，不建议使用
            //     return node.name == "Class 6";
            // }
    }

    //数据
    $scope.data = {
        dataForTheTree:[]
    };
    $scope.orderby = 'list';    //按照list排序
    queryData();
   
    /*查询数据*/
    $scope.queryData = queryData;
    function queryData() {
        $http.get("data/data.json").success(function(data) {
            $scope.data.dataForTheTree = data;
            $scope.expanded = [$scope.data.dataForTheTree[0],
                $scope.data.dataForTheTree[2],
                $scope.data.dataForTheTree[4],
                $scope.data.dataForTheTree[4].list[0],
                $scope.data.dataForTheTree[4].list[0].list[0]
            ];
        
        });
    }
    
    /*选中/取消选中node触发事件 */
    $scope.printSelected = printSelected;
    function printSelected(node){
        console.log("选中/取消选中node "+node.name);
    }

   
    $scope.addNewRoot = function(){
        $.ajax({
            type:'get',
            url:'./data/class8.json',
            dataType:'JSON',
            success:function(data){
                $scope.data.dataForTheTree.push(data);
            }
        });
    }

    $scope.addNewLeaf = function(){
        $scope.data.dataForTheTree[0].list.push({name:"Group 5",list:[]});
    }

    $scope.clearSelected = function(){
        $scope.selected = [];
    }

    $scope.printToggle = function(node){
        console.log("展开/收缩node "+node.name);
    }

    $scope.sort = function(){       //排序
        $scope.orderby = 'name';   
    }

    $scope.rgtClick = function(node){
        $scope.clickNode = node.name;
    }
}]);