myApp.controller('loginController', function($scope, $state) {
	
	$scope.goToWizard = function(){
		$state.go('about-you')
	}

});