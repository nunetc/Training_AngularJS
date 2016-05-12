angular.module('myApp', ['ngRoute'])

.service('NotifyService', [function() {
	this.alert = function(msg) {
		swal(msg)
	}
	this.success = function(msg) {
		swal('Good job service!', msg, 'success');
	}
	this.error = function(msg) {
		swal('Oops...', msg, 'error');
	}
}])

//.factory('NotifyService', [function() {
//	var notify = {};
//
//	notify.alert = function(msg) {
//		swal(msg)
//	}
//	notify.success = function(msg) {
//		swal('Good job factory!', msg, 'success');
//	}
//	notify.error = function(msg) {
//		swal('Oops...', msg, 'error');
//	}
//
//	return notify;
//}])

// .provider('NotifyService', [function() {
// 	var _successTitle = 'Good job provider!';
//
// 	this.setSuccessTitle = function(successTitle) {
// 		_successTitle = successTitle;
// 	}
//
// 	this.$get = function() {
// 		var notify = {};
//
// 		notify.alert = function(msg) {
// 			swal(msg)
// 		}
// 		notify.success = function(msg) {
// 			swal(_successTitle, msg, 'success');
// 		}
// 		notify.error = function(msg) {
// 			swal('Oops...', msg, 'error');
// 		}
//
// 		return notify;
// 	}
// }])
// .config(['$routeProvider', 'NotifyServiceProvider', function($routeProvider, NotifyServiceProvider) {
// 	NotifyServiceProvider.setSuccessTitle('OK !!!');
//
// 	$routeProvider
// 		.when('/list', {
// 			templateUrl: 'list.html',
// 			controller: 'ListController'
// 		})
// 		.when('/detail/:name', {
// 			templateUrl: 'detail.html',
// 			controller: 'DetailController'
// 		})
// 		.otherwise({
// 			redirectTo: '/list'
// 		});
// }])

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

.controller('ListController', ['$scope', '$location', 'NotifyService', function($scope, $location, NotifyService) {
	$scope.users = [
		{name: 'Tinky-Winky'},
		{name: 'Dipsy'},
		{name: 'Laa-Laa'},
		{name: 'Po'}
	];

	$scope.alert = function(msg) {
		NotifyService.alert(msg);
	}
}])

.controller('DetailController', ['$scope', '$routeParams', '$window', 'NotifyService', function($scope, $routeParams, $window, NotifyService) {
	$scope.userName = $routeParams.name;

	$scope.back = function() {
		$window.history.back();
	}

	$scope.NotifyService = NotifyService;
}])

;
