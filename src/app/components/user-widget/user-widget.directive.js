(function (angular) {
    'use strict';
    angular
        .module('app.module')
        .directive('userWidget', userWidget);

    function userWidget() {
        var directive = {
            restrict: 'EA',
            templateUrl: 'user-widget/user-widget.tpl.html',
            controller: ['$scope', 'userService', 'postService', function ($scope, userService, postService) {
                userService.getAll().then(function (result) {
                    if (result.data) {
                        $scope.users = result.data;
                    }
                });
            }]
        };
        return directive;
    }
})(window.angular);