angular.module('myApp.myHttpInterceptor', [])

.factory('myHttpInterceptor', ['$q', '$log', function($q, $log) {
	return {
		'request' : function(config) {
			return config;
		},

		'requestError' : function(rejection) {
			return $q.reject(rejection);
		},

		'response' : function(response) {
			return response;
		},

		'responseError' : function(rejection) {
			$log.debug('responseError >>>', rejection);
			alert('url = '+rejection.config.url+'\n'+'error code = '+rejection.status);
			// do something on error
			// ...
			return $q.reject(rejection);
		}
	};
}])

.config(['$httpProvider', function($httpProvider) {
	$httpProvider.interceptors.push('myHttpInterceptor');
}])

;
