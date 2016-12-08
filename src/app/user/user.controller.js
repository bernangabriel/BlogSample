(function (angular) {
    angular
        .module('app.module')
        .controller('userCtrl', userCtrl);

    userCtrl
        .$inject = ['$scope','$rootScope', 'userService'];

    function userCtrl($scope,$rootScope, userService) {
        $rootScope.enabledPostSearch = false;
        var vm = this;

        function getUsers() {
            userService.getAll().then(function (result) {
                if (result.data) {
                    vm.users = result.data;
                }
            });
        }
        
        getUsers(); //get all users
    }

})(window.angular);