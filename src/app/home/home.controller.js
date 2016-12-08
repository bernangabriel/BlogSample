(function (angular) {
    angular
        .module('app.module')
        .controller('homeCtrl', homeCtrl);

    homeCtrl
        .$inject = ['$scope', '$rootScope'];

    function homeCtrl($scope, $rootScope) {
        $rootScope.enabledPostSearch = false;
    }
})(window.angular);