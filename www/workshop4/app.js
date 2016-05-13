angular.module('myApp', [])

.filter('capitalize', function() {
	return function(input, isCapitalizeWord) {
		if (angular.isString(input)) {
			if (isCapitalizeWord) {
				// capitalize first letter every word
				return input.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
			}
			else {
				// capitalize first letter of sentence
				return input.substring(0, 1).toUpperCase() + input.substring(1);
			}
		}
		else {
			return '';
		}
	};
})

.controller('HelloController', [ '$scope', '$filter', function($scope, $filter) {

	$scope.data = 'the quick brown fox jumps over the lazy dog';
	
	$scope.dataCapitalizeWord = $filter('capitalize')($scope.data, true);

} ]);