// create the module and name it
	var schmoozApp = angular.module('schmoozApp', ['ngRoute']);



	// routes
	schmoozApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'partials/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/oursoftware', {
				templateUrl : 'partials/oursoftware.html',
				controller  : 'ourSoftwareController'
			})

			// route for the service page
			.when('/aboutus', {
				templateUrl : 'partials/aboutus.html',
				controller  : 'aboutUsController'
			})
			//
			.when('/sub_home', {
				templateUrl : 'partials/sub_home.html',
				controller  : 'subHomeController'
			})

			//
			.when('/events', {
				templateUrl : 'partials/events.html',
				controller  : 'eventsController'
			});
	
	});

	// create the controller and inject Angular's $scope

	schmoozApp.controller('mainController', function($scope) {
		// $scope.information = 'About My Site';
		$scope.header_one = 'STOP NETWORKING.';
		$scope.header_two = 'START SCHMOOZING.';

		
	});

	schmoozApp.controller('aboutUsController', function($scope) {
		// $scope.information = 'About My Site';
		$scope.header_one = 'about.';
		$scope.header_two = 'us';
	});

	schmoozApp.controller('ourSoftwareController', function($scope) {
		// $scope.information = 'Contact';
		$scope.header_one = 'software.';
		$scope.header_two = 'page';

		$scope.initialize = function () {
        $('.background-img-container').animate({"height": "35%"}, 800);
        $('.background-mask-container').animate({"height": "35%"}, 800);
				$('.background-content-container').animate({"height": "35%"}, 800);       
    	}
	});

	schmoozApp.controller('eventsController', function($scope) {
		// $scope.information = 'Contact';
		$scope.header_one = 'events.';
		$scope.header_two = 'page';
	});

	schmoozApp.controller('subHomeController', function($scope) {
		// $scope.information = 'Contact';
		$scope.header_one = 'STOP NETWORKING.';
		$scope.header_two = 'START SCHMOOZING';

		$scope.initialize = function () {
        $('.background-img-container').animate({"height": "60%"}, 500);
        $('.background-mask-container').animate({"height": "60%"}, 500);
    	}
	});

