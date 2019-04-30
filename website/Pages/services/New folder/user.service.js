(function () {

    angular
        .module("angularApp")
        .factory("userService", userService)

    userService.$inject = ["$timeout", "$filter", "$q"];
    function userService($timeout, $filter, $q) {

        var service = {};

        function _getUsers() {
            if(!localStorage.users) {
                localStorage.users = JSON.stringify([]);
            }

            return JSON.parse(localStorage.users);
        }

        function _setUsers(users) {
            localStorage.users = JSON.stringify(users);
        }


        function GetUsers() {
            var deferred = $q.defer();
            deferred.resolve(_getUsers());
            return deferred.promise;
        }

        function GetUserById(id) {
            var deferred = $q.defer();           
            var filtered = $filter("filter")(_getUsers(), { id: id });
            var user = filtered.length ? filtered[0] : null;
            deferred.resolve(user);

            return deferred.promise;
        }

        function GetUserByUsername(username) {
            var deferred = $q.defer();           
            var filtered = $filter("filter")(_getUsers(), { username: username });
            var user = filtered.length ? filtered[0] : null;
            deferred.resolve(user);

            return deferred.promise;            
        }

        function CreateUser(user) {
            var deferred = $q.defer();
            
            $timeout(function() {
                GetUserByUsername(user.username)
                .then(function (duplicateUser) {
                    if(duplicateUser !== null) {
                        deferred.resolve({ success: false, message: "Username " + user.username + " already exists" });
                    } else {
                        var users = _getUsers();

                        var lastUser = users[users.length - 1] || { id: 0 }
                        user.id = lastUser.id + 1;

                        users.push(user);
                        _setUsers(users);

                        deferred.resolve({ success: true });
                    }
                });
            }, 1000);

            return deferred.promise;
        }

        function UpdateUser(user) {
            var deferred = $q.defer();
            var users = _getUsers();

            for (var i = 0; i < users.length; i++) {
                if (users[i].id === user.id) {
                    users[i] = user;
                    break;
                }
            }

            _setUsers(users);
            deferred.resolve();

            return deferred.promise;

        }

        function DeleteUser(id) {
            var deferred = $q.defer();
            var users = _getUsers();
            
            for (var i = 0; i < users.length; i++) {
                var user = users[i];

                if (user.id === id) {
                    users.splice(i, 1);
                    break;
                }
            }

            _setUsers(users);
            deferred.resolve();

            return deferred.promise;            
        }

        service.GetUsers = GetUsers;
        service.GetUserById = GetUserById;
        service.GetUserByUsername = GetUserByUsername;
        service.Create = CreateUser;
        service.Update = UpdateUser;
        service.Delete = DeleteUser;

        return service;
    }

})();