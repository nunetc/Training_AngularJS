angular.module('myApp', [])

.filter('capitalize', function() {
	return function(input, isCapitalizeWord) {
		if (angular.isString(input)) {
			if (isCapitalizeWord) {
				return input.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
			}
			else {
				return input.substring(0, 1).toUpperCase() + input.substring(1);
			}
		}
		else {
			return '';
		}
	};
})

.controller('HelloController', [ '$scope', function($scope) {

	$scope.data = 'the quick brown fox jumps over the lazy dog';

} ]);