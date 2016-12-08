(function (angular) {
    'use strict';
    angular
        .module('app.module')
        .config(config);

    config
        .$inject = ['$stateProvider'];

    function config($stateProvider) {
        $stateProvider
            .state('about', {
                url: '/about',
                templateUrl: 'about.html',
                controller: 'aboutCtrl as vm'
            });
    }
})(window.angular);