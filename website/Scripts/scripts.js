var app = angular.module("angularApp", ['ngRoute', "ngCookies"]);
app.controller("restapiController", function ($scope ,$rootScope, $cookies, $http) {
    $http.get('http://localhost:5055/products')
    .then(function(res) {    
        $scope.namelist = res.data;
    });
    if (getQueryVariable("token") != 0) {
      $scope.Login="Min Sida";console.log ("Min Sida");
    }else{
      $scope.Login="Log in";console.log ("Log in");
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
  
    $scope.search = function(item) {
        if($rootScope.searchText == undefined) {
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

    $(window).scroll(function() {
        let topPosition = $(this).scrollTop();
        if(topPosition > 100) {
            $(".scrollTop").css("opacity","1");
        } else {
            $(".scrollTop").css("opacity","0");
        }
    })
    const starsTotal = 5;
        $scope.rating = function (input) {
            return Math.round(((input / starsTotal) * 100) / 10) * 10 + '%';

        }
}) 
app.controller("ColumnViewController", function($scope) {
    $scope.pagetitle = "Home"; 
    document.getElementById("listV").classList.remove('ActiveK');
    document.getElementById("columnV").classList.remove('ActiveK');
    document.getElementById("columnV").classList.add('ActiveK');
})
app.controller("ListViewController", function($scope) {
    $scope.pagetitle = "Home";
    document.getElementById("listV").classList.remove('ActiveK');
    document.getElementById("columnV").classList.remove('ActiveK');
    document.getElementById("listV").classList.add('ActiveK');
});
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