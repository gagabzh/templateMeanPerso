/**
 * Created by bgarnier on 04/05/2017.
 */
'use strict';

angular.module('myApp', [
]).
factory('serviceAjax', function serviceAjax($http) {
    return {
        findMenu: function () {
            return $http.get("http://localhost:3000/mongoREST");
        }
    };
}).controller('MainCtrl', ['$scope','serviceAjax',
    function($scope,serviceAjax) {
        $scope.post1 = "Les posts : ";
        serviceAjax.findMenu().then(function (response) {
            $scope.post = response.data;
        });
    }
])
;