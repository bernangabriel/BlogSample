(function (angular) {
    angular
        .module('app.module')
        .controller('postDetailsCtrl', postDetailsCtrl);

    postDetailsCtrl
        .$inject = ['$stateParams', '$state', 'postService', 'userService'];

    function postDetailsCtrl($stateParams, $state, postService, userService) {
        var vm = this;

        if ($stateParams.id) {
            getPostDetails($stateParams.id);
        } else {
            $state.go('/post');
        }

        //get post details
        function getPostDetails(id) {
            try {
                postService.getById(id).then(function (postResult) {

                    if (postResult.data) {
                        vm.details = postResult.data;
                    } else {
                        $state.go('/post');
                    }
                });
            } catch (ex) {
                $state.go('/post');
            }
        }
    }
})(window.angular);