(function() {
    'use strict';
    angular.module('cg', [])

    .service('Storage', ['$window', function($window) {
        /* Write Function */
        this.write = function(key, val) {
            var value = angular.toJson(val);
            $window.localStorage.setItem(key, value);
        };

        /* Read Function */
        this.read = function(key) {
            var value = JSON.parse($window.localStorage.getItem(key));
            return value;
        };
    }])

})();