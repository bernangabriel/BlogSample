(function (angular) {
    angular
        .module('app.module')
        .factory('util', util);

    util
        .$inject = ['$ngConfirm'];

    function util($ngConfirm) {
        var service = {
            successMessage: successMessage
        };

        function successMessage(title, content) {
            $ngConfirm({
                title: title,
                type: 'green',
                content: content,
                buttons: {
                    close: function ($scope, button) {

                    }
                }
            });
        }
        
        return service;
    }
})(window.angular);