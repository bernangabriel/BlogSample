(function (angular) {
    'use strict';
    angular
        .module('app.module')
        .factory('commentService', commentService);

    commentService
        .$inject = ['$http', 'constants'];
    function commentService($http, constants) {
        var service = {
            getByPostId: getByPostId,
            insert:insert
        };

        function getByPostId(id) {
           return $http.get(constants.api + 'comments?postId=' + id);
        }
        
        function insert(comment){
            return $http.post(constants.api+'comments',comment);
        }

        return service;
    }
})(window.angular);