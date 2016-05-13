// angular.module('myApp', ['ngRoute', 'myApp.myHttpInterceptor'])
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
}])

.controller('ListController', ['$scope', '$location', '$http', '$q', function($scope, $location, $http, $q) {

	$http.get('/mock-webservice/users.json')
		.then(function successCallback(response) {
			$scope.users = response.data;
		}, function errorCallback(response) {
			console.log('GET users.json error >>>', response);
		});

	$http.get('/mock-webservice/products.json')
		.then(function successCallback(response) {

		}, function errorCallback(response) {
			console.log('GET products.json error >>>', response);
		});
	
}])

.controller('DetailController', ['$scope', '$routeParams', '$window', function($scope, $routeParams, $window) {
	$scope.userName = $routeParams.name;

	$scope.back = function() {
		$window.history.back();
	}
}])

;
