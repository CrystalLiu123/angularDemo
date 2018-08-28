
"use strict";
angular.module("myApp", [])
.controller('myCtrl',function($scope){
    $scope.cklabel = "是";          //初始化标签
    $scope.click = function(){      
        alert("在子作用域中通过属性ckcallback,执行父作用域中的方法click()");
    }
})
.directive("trsRadio", function() {
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
            cklabel: "=",
        },
        //控制器，此处为匿名函数，可注入任何服务，也可是字符串，查找已注册过的控制器
        // controller: function($scope) {      //父作用域，即调用组件的页面的作用域
        //     $scope.cklabel = "是";          //初始化标签
        //     $scope.click = function(){      
        //          alert("在子作用域中通过属性ckcallback,执行父作用域中的方法click()");
        //     }
        // },
        link: function(scope, element, attrs, controller) {     //scope为子作用域，即自定义组件的作用域
            var ball = document.getElementById("ball");
            var bgc = document.getElementById("bgc");
            if (typeof scope.cklabel === "undefined") {         //默认关闭
                scope.cklabel = "否";
                ball.style.left = "8px";
                bgc.style.backgroundColor = "#b3b0b0";
            }else if(scope.cklabel == "是"){   
                ball.style.left = "39px";
                bgc.style.backgroundColor = "#62daff";
            }else{
                ball.style.left = "8px";
                bgc.style.backgroundColor = "#b3b0b0";
            }
            
            scope.change = function(){  //改变按钮状态
                ball.style.left == "8px" ? ball.style.left = "39px" :ball.style.left = "8px";
                if(ball.style.left == "8px"){
                    scope.cklabel="否";
                    bgc.style.backgroundColor = "#b3b0b0";
                }else{
                    scope.cklabel="是";
                    bgc.style.backgroundColor = "#62daff";
                }
            }
        }
    };
});
