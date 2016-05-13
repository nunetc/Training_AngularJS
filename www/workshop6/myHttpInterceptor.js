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
			// do something on error
			// ...
			$log.debug('responseError >>>', rejection);
			alert('url = '+rejection.config.url+'\n'+'error code = '+rejection.status);
			// ...
			
			return $q.reject(rejection);
		}
	};
}])

.config(['$httpProvider', function($httpProvider) {
	$httpProvider.interceptors.push('myHttpInterceptor');
}])

;
