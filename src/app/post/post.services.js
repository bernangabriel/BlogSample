(function (angular) {
    'use strict';
    angular
        .module('app.module')
        .factory('postService', postService);

    postService
        .$inject = ['$http', 'constants'];

    function postService($http, constants) {
        var service = {
            get: get,
            getById: getById,
            insert: insert,
            deletePost: deletePost,
            updatePost: updatePost,
            getPostsByUser: getPostsByUser
        };

        function get() {
            return $http.get(constants.api + 'posts');
        }

        function getById(id) {
            return $http.get(constants.api + 'posts/' + id);
        }

        function insert(post) {
            return $http.post(constants.api + 'posts', post);
        }

        function deletePost(id) {
            return $http.delete(constants.api + 'posts/' + id);
        }

        function updatePost(post) {
            return $http.put(constants.api + 'posts/' + post.id, post);
        }

        function getPostsByUser(id) {
            return $http.get(constants.api + 'posts?userId=' + id);
        }

        return service;
    }
})(window.angular);