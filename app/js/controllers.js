'use strict';

let phonecatController = angular.module('phonecatController', []);

phonecatController.controller('PhoneListCtrl', ['$scope', '$http', PhoneListCtrl]);
phonecatController.controller('PhoneDetailCtrl', ['$scope', '$routeParams', '$http', PhoneDetailCtrl]);

function PhoneListCtrl ($scope, Phone) {    
    // $http.get('phones/phones.json').success(function (data) {
    $scope.phones = Phone.query();
    // });

    $scope.orderProp = 'age';
}

function PhoneDetailCtrl ($scope, $routeParams, Phone) {
    // $scope.phoneId = $routeParams.phoneId;

    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function (phone) {
        $scope.mainImgUrl = phone.images[0];
    });

    $scope.setImage = function (imgUrl) {
        $scope.mainImgUrl = imgUrl;
    };
    // $http.get('phones/' + $routeParams.phoneId + '.json').success(function(data){
    //     $scope.phone = data;
    //     $scope.mainImgUrl = data.images[0];

    //     $scope.setImage = function(imgUrl){
    //         $scope.mainImgUrl = imgUrl;
    //     };
    // });
}