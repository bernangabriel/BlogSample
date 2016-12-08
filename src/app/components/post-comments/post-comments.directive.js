(function (angular) {
    'use strict';
    angular
        .module('app.module')
        .directive('postComments', postComments);

    postComments
        .$inject = ['$stateParams', 'commentService'];

    function postComments($stateParams, commentService) {
        var directive = {
            restrict: 'EA',
            templateUrl: 'post-comments/post-comments.tpl.html',
            controller: controller
        };

        controller
            .$inject = ['$scope', '$uibModal'];

        function controller($scope, $uibModal) {
            
            $scope.openAddNewComment = openAddNewComment;
            $scope.postId = $stateParams.id;

            getComments(); //get all comments

            function openAddNewComment() {
                if ($scope.postId) {
                    var modalInstance = $uibModal.open({
                        templateUrl: 'post-comments/add-new-comment.tpl.html',
                        controller: ['$scope', function ($innerScope) {

                            $innerScope.add = add;
                            $innerScope.close = close;

                            function add(comment) {
                                if (comment) {
                                    comment.postId = $scope.postId;
                                    commentService.insert(comment).then(function (result) {
                                        close();
                                        getComments();
                                    });
                                }
                            }

                            function close() {
                                modalInstance.close('dismiss');
                            }
                        }]
                    });
                }
            }

            function getComments() {
                if ($scope.postId) {
                    commentService.getByPostId($scope.postId).then(function (commentResult) {
                        $scope.comments = commentResult.data.reverse();
                    });
                }
            }
        }

        return directive;
    }
})(window.angular);