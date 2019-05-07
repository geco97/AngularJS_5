(function () {
    angular
        .module("angularApp", ["ngRoute", "ngCookies"])
        .controller("restapiController",restapiController)
        .controller("ListViewController",ListViewController)
        .controller("GridViewController",GridViewController)
        .config(config)
        .run(run);

        restapiController.$inject = ["$rootScope", "$scope", "$cookies", "$http"];
        function restapiController($scope ,$rootScope, $cookies, $http) {
            $http.get('http://localhost:5055/products')
            .then(function(res) {    
                $scope.namelist = res.data;
            });
            $rootScope.globals = $cookies.getObject("globals") || {};
        if ($rootScope.globals.currentUser) {
            $scope.Login="Min Sida";
            $scope.LoginUrl="Minsida";
        }
           else{
              $scope.Login="Log in";
              $scope.LoginUrl="Login";
            }
            $scope.filterFields = ['productname', 'Category', 'manufacturer']; 
            $scope.sortColumn = "productname";
            $scope.rowLimits = "10";
             $scope.rowLimitArr = [
               {id: "5",name: "5"},
               {id: "10",name: "10"},
               {id: "20",name: "20"},
               {id: "50",name: "50"},
               {id: "100",name: "100"},
            ];
            $scope.Logout = function(currentUser){
                $cookies.remove("globals");
                window.location.reload();
            } 
            $scope.search = function(item) {
                console.log($rootScope.searchText);
                if($scope.searchText == undefined) {
                    return true;
                }
                else {
                    if(
                        item.manufacturer.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 ||
                        item.productname.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 ||
                        item.Category.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1
                    ) {
                        return true;
                    }
                }
        
                return false;
            }
        
            
            const starsTotal = 5;
                $scope.rating = function (input) {
                    return Math.round(((input / starsTotal) * 100) / 10) * 10 + '%';
        
                }
        }
        
    config.$inject = ["$routeProvider", "$locationProvider"];
    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when("/", { 
                templateUrl: "website/views/ColumnView.html",
                controller: "GridViewController" 
            })
            .when("/ColumnView", { 
                templateUrl: "website/views/ColumnView.html",
                controller: "GridViewController" 
            })
        
            .when("/ListView", { 
                templateUrl: "website/views/ListView.html",
                controller: "ListViewController" 
            })
            .when("/Login", {
                controller: "loginController",
                templateUrl: "website/Pages/Partials/Login/login.view.html",
                controllerAs: "vm"                
            })
            .when("/Minsida", {
                controller: "homeController",
                templateUrl: "website/Pages/Partials/Home/home.view.html",
                controllerAs: "vm"                
            })
            .when("/Register", {
                controller: "registerController",
                templateUrl: "website/Pages/Partials/Register/register.view.html",
                controllerAs: "vm"                
            })
           
            .otherwise({ redirectTo: "/" });            
    }

    run.$inject = ["$rootScope", "$location", "$cookies", "$http"];
    function run($rootScope, $location, $cookies, $http) {

        $rootScope.globals = $cookies.getObject("globals") || {};
        if ($rootScope.globals.currentUser) {
             $http.defaults.headers.common["Authorization"] = 'Basic ' +  $rootScope.globals.currentUser.token;
            console.log($http.defaults.headers.common["Authorization"])
        }

        $rootScope.$on("$locationChangeStart", function(event, next, current) {
            var restrictedPage = $.inArray($location.path(), ["/Login", "/Register","/ListView","/ColumnView"]) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $location.path("/");
            }
        })
    }
    ListViewController.$inject = ["$scope"];
    function ListViewController ($scope) {
        $scope.pagetitle = "Home";
        $scope.search = function(item) {
            if($scope.searchText == undefined) {
                return true;
            }
            else {
                if(
                    item.manufacturer.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 ||
                    item.productname.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 ||
                    item.Category.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1
                ) {
                    return true;
                }
            }
    
            return false;
        }
    }
    GridViewController.$inject = ["$scope"];
    function GridViewController($scope) {
            $scope.pagetitle = "Home";
            $scope.search = function(item) {
                if($scope.searchText == undefined) {
                    return true;
                }
                else {
                    if(
                        item.manufacturer.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 ||
                        item.productname.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 ||
                        item.Category.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1
                    ) {
                        return true;
                    }
                }
        
                return false;
            }
        }
    function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return 0;
}
})();