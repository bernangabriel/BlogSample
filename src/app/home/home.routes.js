(function (angular) {
    'use strict';
    angular
        .module('app.module')
        .config(config);

    config
        .$inject = ['$stateProvider', '$urlRouterProvider'];
    function config($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('home', {
                url:'/home',
                templateUrl: 'home.html',
                controller: 'homeCtrl as vm',
                title: 'Home'
            });

        $urlRouterProvider.otherwise('/home');
    }
})(window.angular);