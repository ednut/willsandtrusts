'use strict';
var app = angular.module('myApp.controllers');

app.controller('loginController', function($scope, $state) {
	
	$scope.goToWizard = function(){
		$state.go('about-you')
	}

});