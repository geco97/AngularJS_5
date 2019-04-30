(function () {

    angular
        .module("angularApp")
        .controller("homeController", homeController)

    homeController.$inject = ["userService", "$rootScope"];
    function homeController(userService, $rootScope) {
        var vm = this;
        vm.user = null;
        vm.allUsers = [];
        function getCurrentUser(id) {
           console.log(id);
            userService.GetUser(id)
                .then(function (user) {
                    console.log(user);
                    vm.user = user;             
                })      
        }

        function _loadAllUsers() {
            userService.GetUsers()
                .then(function (users) {
                    vm.allUsers = users
                })
        }

        function deleteUser(id) {
            userService.Delete(id)
                .then(function () {
                    _loadAllUsers();
                })
        }

        function initController() {
            getCurrentUser($rootScope.globals.currentUser.id);
            _loadAllUsers();
        }


        initController();
        vm.deleteUser = deleteUser;

    }

})();