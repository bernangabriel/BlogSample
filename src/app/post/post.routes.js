(function (angular) {
    'use strict';
    angular
        .module('app.module')
        .config(config);

    config
        .$inject = ['$stateProvider', '$urlRouterProvider'];
    function config($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('post', {
                url: '/post',
                templateUrl: 'post.html',
                controller: 'postCtrl as vm',
                resolve: {
                    postList: postList
                }
            })
            .state('details', {
                url: '/details/:id',
                templateUrl: 'post-details.html',
                controller: 'postDetailsCtrl as vm'
            });


        postList
            .$inject = ['postService'];
        function postList(postService) {
            return postService.get();
        }
    }
})(window.angular);