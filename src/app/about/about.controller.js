(function (angular) {
    angular
        .module('app.module')
        .controller('aboutCtrl', aboutCtrl);

    aboutCtrl
        .$inject = ['$scope','$rootScope'];

    function aboutCtrl($scope, $rootScope) {
        $rootScope.enabledPostSearch = false;
    }
})(window.angular);