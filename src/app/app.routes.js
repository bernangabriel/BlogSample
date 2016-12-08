(function (angular) {
    angular
        .module('app.module')
        .config(config);

    config
        .$inject = ['$stateProvider', '$urlRouterProvider'];
    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
    }
})(window.angular);