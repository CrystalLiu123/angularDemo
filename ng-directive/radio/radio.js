
"use strict";
var app = angular.module("myApp", [])
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
app.directive("trsRadio", function() {
    return {
        // restrict:限定其使用方式，详细用法：
        // E(元素)：<trs-radio></trs-radio> 
        // A(属性)：<div trs-radio='xxx'></div>
        // C(类)： <div class="trsRadio"></div>  
        // M(注释)：<--directive:trsRadio expression-->  与ng版本有关
        restrict: "EACM",

        //replace：是否使用隐藏自定义的标签
        replace: false,

        //priority:指令优先级，当一个DOM树上有多个指令，优先级高的先执行
        //priority:5,

        //terminal:为true时优先级低于此指令的其他指令则无效
        //terminal:true,

        //template:自定义指令中的内容，可以是一段html代码，也可以是一个函数,接受两个参数tElement和tAttrs
        //template: '<input type="button" value="确认" ng-click="confirm()"/>' ,
        templateUrl: "./radio/radio.html",

        //scope：作用域继承机制,取值：
        //false：默认值，表示继承父作用域，父子作用域相互影响
        //true：表示继承父作用域，并创建自己的作用域（子作用域），父作用域单向影响子作用域
        //{}：表示创建一个全新的隔离作用域；父子作用域中的属性根据配置决定
        scope: {
            //@ 父scope内容改变影响子scope内容，而子scope内容改变不影响父scope上的内容
            //= scope 的属性和父 scope 属性名之间建立双向绑定
            //& 在子作用域中执行父作用域中的方法
            ckcallback: "&",   //回调函数 可在父作用域另外定义
            ckstatus: "=",
        },
        //控制器，此处为匿名函数，可注入任何服务,亦可以是注册过的控制器名称
        controller: 'myCtrl',     
        link: function(scope, element, attrs, controller) {     //scope为子作用域，即自定义组件的作用域
            if (typeof scope.ckstatus === "undefined") {         //默认关闭
                scope.ckstatus = true;
            }
            
            scope.change = function(){  //改变按钮状态
                scope.ckcallback(); //父作用域中<trs-Radio ckcallback="function()">实定义function
            }
        }
    }
});
