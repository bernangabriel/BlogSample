(function (angular) {
    'use strict';
    angular
        .module('app.module')
        .config(config);

    config
        .$inject = ['$stateProvider'];

    function config($stateProvider) {
        $stateProvider
            .state('user', {
                url: '/user',
                templateUrl: 'user.html',
                controller: 'userCtrl as vm'
            });
    }
})(window.angular);