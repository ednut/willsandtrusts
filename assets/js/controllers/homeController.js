myApp.controller('generalController', [ '$scope', 'myService', '$location', '$window', '$state', '$rootScope', function(
    $scope, 
    myService,
    $location, 
    $window, 
    $state, 
    $rootScope) 
    {

    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };

    $scope.goTo = function(page){
        $state.go(page)
    }

    $scope.back = function(){
        $window.history.back();
    }


    $scope.child = 0;

    $scope.addChild = function(){
            $scope.child = $scope.child + 1
    }

    $scope.substractChild = function(){
        if($scope.child <= 0){
            alert("Opps... we cannot have negative number!");
            $scope.child = 0;
        }else{
            $scope.child = $scope.child - 1
        }
    }

    $scope.estateStatus = myService.validateEstate;

    $scope.estate = function(){
         $scope.estateStatus = true;
    }

}]);