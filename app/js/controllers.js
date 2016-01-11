'use strict';

let phonecatController = angular.module('phonecatController', []);

phonecatController.controller('PhoneListCtrl', ['$scope', '$http', PhoneListCtrl]);
phonecatController.controller('PhoneDetailCtrl', ['$scope', '$routeParams', '$http', PhoneDetailCtrl]);

function PhoneListCtrl ($scope, $http) {    
    $http.get('phones/phones.json').success(function (data) {
        $scope.phones = data;
    });

    $scope.orderProp = 'age';
}

function PhoneDetailCtrl ($scope, $routeParams, $http) {
    $scope.phoneId = $routeParams.phoneId;

    $http.get('phones/' + $routeParams.phoneId + '.json').success(function(data){
        $scope.phone = data;
    });
}