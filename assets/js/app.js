var myApp = angular.module('myApp', ['ui.router']);

	// configure our routes
	myApp.config(function($stateProvider, $urlRouterProvider) {
	  //
	  // For any unmatched url, redirect to /state1
	  $urlRouterProvider.otherwise("/");
	  //
	  // Now set up the states
	  $stateProvider
	    .state('home', {
	      url: "/",
	      templateUrl: "partials/home.html"
	    })

	    .state('login', {
	      url: "/login",
	      templateUrl: "partials/login.html"
	    })

	    .state('signup', {
	      url: "/signup",
	      templateUrl: "partials/signup.html"
	    })

	    .state('state', {
	      url: "/state",
	      templateUrl: "partials/state.html"
	    })

	    .state('partner', {
	      url: "/partner",
	      templateUrl: "partials/partner.html"
	    })

	    .state('children', {
	      url: "/children",
	      templateUrl: "partials/children.html"
	    })

	    .state('who', {
	      url: "/who",
	      templateUrl: "partials/who.html"
	    })

	    .state('elsewhere', {
	      url: "/elsewhere",
	      templateUrl: "partials/elsewhere.html"
	    })

	    .state('summary', {
	      url: "/summary",
	      templateUrl: "partials/summary.html"
	    })

	    .state('basic', {
	      url: "/about-yourself/basics",
	      templateUrl: "partials/basics.html"
	    })

	    .state('select-partner', {
	      url: "/about-yourself/select-partner",
	      templateUrl: "partials/select-partner.html"
	    })

	    .state('select-children', {
	      url: "/about-yourself/select-children",
	      templateUrl: "partials/select-children.html"
	    })

	    .state('estate-intro', {
	      url: "/estate-introduction",
	      templateUrl: "partials/estate.html"
	    })

	    .state('estate-people', {
	      url: "/estate/people",
	      templateUrl: "partials/estate-people.html"
	    })

	});

	myApp.run(function($state, $rootScope){
	   $rootScope.$state = $state;
	})
