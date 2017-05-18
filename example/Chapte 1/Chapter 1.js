var app = angular.module('demo', []);
app.controller('demoController', function($scope) {
	$scope.list = [
		{name: 'bob', sex: 1},
		{name: 'peter', sex: 1},
		{name: 'selina', sex: 0}
	];
});
angular.bootstrap(document, ['demo']);
