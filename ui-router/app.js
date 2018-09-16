var app = angular.module('myApp', ['ui.router']);
//配置
app.config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){
    $stateProvider.state('home',{
        url:'/home',
        templateUrl:"html/home.html"

    //父路由与子路由通过”.“连接就形成了子路由,父页面中的链接<a ui-sref=".子路由">...</a>
    }).state('home.left',{
        url:'/left',      //^表示是否为绝对路径：有^,路径为index.html#/page1；无^,路径为index.html#/page/page1
        templateUrl:"html/page/home-left.html",
        controller:function($scope){    //匿名控制器，作用域为home-right.html页面
            $scope.items=['our','song','is','xxx'];
        }

    }).state('home.right',{
        url:'/right', 
        templateUrl:"html/page/home-right.html",
    }).state('about',{
        url:'/about',
        views:{     //多视图
            '':{    //无名view
                templateUrl:"html/about.html"
            },
            //用@连接视图名和路由：视图名@路由
            'view-top@about':{
                template:"<h3>这是view-top视图<h3>"
            },
            'view-buttom@about':{
                template:"<h3>这是view-bottom视图<h3>"
            }
        }
    });
    $urlRouterProvider.otherwise("/");
}]);
app.controller("ctrl1", ["$scope", "$http", function($scope, $http) {
   
}]);