'use strict';

let phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone', PhoneListCtrl]);
phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone', PhoneDetailCtrl]);

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