(function (angular) {
    angular
        .module('app.module')
        .controller('postCtrl', postCtrl);

    postCtrl
        .$inject = ['$scope', '$rootScope', '$uibModal', '$ngConfirm', 'postService', 'userService', 'postList', 'util'];

    function postCtrl($scope, $rootScope, $uibModal, $ngConfirm, postService, userService, postList, util) {
        $rootScope.enabledPostSearch = true;
        $rootScope.searchPost='';
        
        var vm = this;

        $rootScope.openAddNewPost = openAddNewPost;
        vm.editPost = editPost;
        vm.deletePost = deletePost;
        vm.viewUser = viewUser;
        vm.showMorePosts = showMorePosts;

        function showMorePosts() {
            if (vm.posts) {
                var newSize = vm.posts.length + 3;
                $scope.newPostSize = newSize;
                refreshAllPost(newSize);
            }
        }

        function viewUser(post) {
            if (post) {
                userService.getById(post.userId).then(function (result) {
                    if (result.data) {
                        $scope.currentUser = result.data;
                        $ngConfirm({
                            title: 'User Details',
                            contentUrl: 'user-details.tpl.html',
                            scope: $scope,
                            buttons: {
                                close: function ($scope, button) {

                                }
                            }
                        });
                    }
                });
            }
        }

        function editPost(postData) {
            var modalInstance = $uibModal.open({
                templateUrl: 'edit-post.tpl.html',
                controller: ['$scope', function ($innerScope) {

                    $innerScope.users = vm.users;
                    $innerScope.save = save;
                    $innerScope.close = close;

                    postService.getById(postData.id).then(function (result) {
                        if (result.data) {
                            $innerScope.post = result.data;
                        }
                    });

                    function save(post) {
                        postService.updatePost(post).then(function (result) {
                            close();
                            refreshAllPost($scope.newPostSize); //refresh
                            util.successMessage('Success', 'Post updated successfully!');
                        });
                    }

                    function close() {
                        modalInstance.close('dismiss');
                    }
                }]
            });
        }

        function deletePost(post) {
            if (post) {
                $ngConfirm({
                    title: 'Delete Post!',
                    content: 'Are you sure you want to delete this post <strong>' + post.title + '</strong>',
                    buttons: {
                        delete: {
                            text: 'Delete',
                            btnClass: 'btn-red',
                            action: function () {
                                postService.deletePost(post.id).then(function (result) {
                                    if (result.data) {
                                        refreshAllPost($scope.newPostSize); //refresh all post
                                        util.successMessage('Success', 'Post deleted successfully!');
                                    }
                                });
                            }
                        },
                        close: function ($scope, button) {

                        }
                    }
                });
            }
        }

        function openAddNewPost() {
            var modalInstance = $uibModal.open({
                templateUrl: 'add-new-post.tpl.html',
                controller: ['$scope', 'postService', function ($innerScope, postService) {

                    $innerScope.users = vm.users;
                    $innerScope.addNewPost = addNewPost;
                    $innerScope.close = close;

                    function addNewPost(post) {
                        if (post) {
                            postService.insert(post).then(function (result) {
                                close();
                                refreshAllPost($scope.newPostSize); //refresh all post
                                util.successMessage('Success', 'Post added successfully!');
                            });
                        }
                    }

                    function close() {
                        modalInstance.close('dismiss');
                    }
                }]
            });
        }

        function getUsers() {
            userService.getAll().then(function (result) {
                vm.users = result.data;
            });
        }

        function refreshAllPost(size) {
            postService.get().then(function (result) {
                if (result.data) {
                    var _mapper = result.data.map(function (item) {
                        if (item.userId) {
                            var user = vm.users.filter(function (u) {
                                if (u.id == item.userId) {
                                    return item;
                                }
                            });

                            if (user) {
                                item.userName = user[0].name;
                            }
                        }
                        return item;
                    });

                    vm.posts = _mapper.reverse().slice(0, size | 3);
                }

            });
        }

        getUsers(); //get all users

        setTimeout(function () {
            refreshAllPost(3); // show post
        }, 25);

    }
})(window.angular);