(function (angular) {
    'use strict';
    angular
        .module('app.module')
        .factory('userService', userService);

    userService
        .$inject = ['$http', 'constants'];
    function userService($http, constants) {
        var service = {
            getAll:getAll,
            getById: getById
        };
        
        function getAll(){
            return $http.get(constants.api+'users');
        }

        function getById(id) {
            return $http.get(constants.api + 'users/' + id);
        }

        return service;
    }
})(window.angular);