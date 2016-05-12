angular.module('myApp', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/list', {
			templateUrl: 'list.html', 
			controller: 'ListController'
		})
		.when('/detail/:name', {
			templateUrl: 'detail.html', 
			controller: 'DetailController'
		})
		.otherwise({
			redirectTo: '/list'
		});
} ])

.controller('ListController', ['$scope', '$location', function($scope, $location) {
	$scope.users = [
		{name: 'Tinky-Winky'}, 
		{name: 'Dipsy'}, 
		{name: 'Laa-Laa'}, 
		{name: 'Po'} 
	];
	
	$scope.gotoDetail = function(user) {
		$location.path('detail/'+user.name);
	}
} ])

.controller('DetailController', ['$scope', '$routeParams', '$window', function($scope, $routeParams, $window) {
	$scope.userName = $routeParams.name;
	
	$scope.back = function() {
		$window.history.back();
	}
} ])

;