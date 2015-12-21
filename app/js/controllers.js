'use strict';

let phonecatApp = angular.module('phonecat', []);

phonecatApp.controller('PhoneListCtrl', ['$scope', '$http', PhoneListCtrl]);
phonecatApp.controller('PhoneDetailCtrl', ['$scope', '$routParams', PhoneDetailCtrl]);

function PhoneListCtrl ($scope, $http) {    
    $http.get('phones/phones.json').success(function (data) {
        $scope.phones = data;
    });

    $scope.orderProp = 'age';
}

function PhoneDetailCtrl ($scope, $routParams) {
    $scope.phoneId = $routParams.phoneId;
}