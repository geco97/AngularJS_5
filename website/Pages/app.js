(function () {
    angular
        .module("angularApp", ["ngRoute", "ngCookies"])
        .config(config)
        .run(run);

    config.$inject = ["$routeProvider", "$locationProvider"];
    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when("/", {
                controller: "homeController",
               // templateUrl: "Partials/Home/home.view.html",
               templateUrl: "Partials/Home/home.view.html",
                controllerAs: "vm"
            })
            .when("/Login", {
                controller: "loginController",
                templateUrl: "Partials/Login/login.view.html",
                controllerAs: "vm"                
            })
            .when("/Register", {
                controller: "registerController",
                templateUrl: "Partials/Register/register.view.html",
                controllerAs: "vm"                
            })
            .otherwise({ redirectTo: "/Login" });            
    }

    run.$inject = ["$rootScope", "$location", "$cookies", "$http"];
    function run($rootScope, $location, $cookies, $http) {

        $rootScope.globals = $cookies.getObject("globals") || {};
        if ($rootScope.globals.currentUser) {
             $http.defaults.headers.common["Authorization"] = 'Basic ' +  $rootScope.globals.currentUser.token;
            console.log($http.defaults.headers.common["Authorization"])
        }

        $rootScope.$on("$locationChangeStart", function(event, next, current) {
            var restrictedPage = $.inArray($location.path(), ["/Login", "/Register"]) === -1;
            
            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $location.path("/Login");
            }
        })
    }
})();