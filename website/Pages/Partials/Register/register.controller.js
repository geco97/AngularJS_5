(function () {

    angular
        .module("angularApp")
        .controller("registerController", registerController)

    registerController.$inject = ["userService", "$location", "$rootScope", "dialogService"];
    function registerController(userService, $location, $rootScope, dialogService) {

        var vm = this;

        vm.register = function () {
            vm.dataLoading = true;
            userService.Create(vm.user)
                .then(function (res) {
                    console.log(res);
                    if(res.success) {
                        dialogService.Success("Registration was successful", true);
                        $location.path("/Login");
                    } else {
                        dialogService.Error(res.message);
                        vm.dataLoading = false;
                    }
                })
        }

    };  
})();