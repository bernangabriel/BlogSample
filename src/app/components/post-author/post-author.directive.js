(function (angular) {
    'use strict';
    angular
        .module('app.module')
        .directive('postAuthor', postAuthor);

    postAuthor
        .$inject = ['$stateParams', 'postService', 'userService'];

    function postAuthor($stateParams, postService, userService) {
        var directive = {
            restrict: 'EA',
            templateUrl: 'post-author/post-author.tpl.html',
            controller: ['$scope', function ($scope) {
                if ($stateParams.id) {
                    postService.getById($stateParams.id).then(function (postResult) {
                        if (postResult.data) {
                            if (postResult.data.userId) {
                                userService.getById(postResult.data.userId).then(function (userResult) {
                                    if (userResult.data) {
                                        $scope.user = userResult.data;
                                    }
                                });
                            }
                        }
                    });
                }
            }]
        };
        return directive;
    }
})(window.angular);