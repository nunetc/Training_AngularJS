angular.module('myApp', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise("/dashboard");

	$stateProvider
		.state('dashboard', {
			url : '/dashboard',
			views: {
					'sidenav': {
						templateUrl: 'sidenav-dashboard.html',
						controller: 'SidenavDashboardCtrl'
					},
					'main': {
						templateUrl: 'main-dashboard.html',
						controller: 'MainDashboardCtrl'
					}
		    }
		})

		.state('shop', {
			url : '/shop',
			views: {
					'sidenav': {
						templateUrl: 'sidenav-shop.html',
						controller: 'SidenavShopCtrl'
					},
					'main': {
						templateUrl: 'main-shop.html',
						controller: 'MainShopCtrl'
					}
		    }
		})
		.state('shop.product', {
			url : '/product',
			templateUrl: 'main-shop-product.html',
			controller: 'MainShopProductCtrl'
		})
		.state('shop.productDetail', {
			url : '/product/:id',
			params: {
					id: null,
					product: null
    	},
			templateUrl: 'main-shop-product-detail.html',
			controller: 'MainShopProductDetailCtrl'
		})
		.state('shop.category', {
			url : '/category',
			template: '<div>===>>>  Shop Category  <<<===</div>',
			controller: 'MainShopCategoryCtrl'
		})
		.state('shop.promotion', {
			url : '/promotion',
			template: '<div>===>>>  Shop Promotion  <<<===</div>',
			controller: 'MainShopPromotionCtrl'
		})

		.state('setup', {
			url : '/setup',
			views: {
					'sidenav': {
						templateUrl: 'sidenav-setup.html',
						controller: 'SidenavSetupCtrl'
					},
					'main': {
						templateUrl: 'main-setup.html',
						controller: 'MainSetupCtrl'
					}
		    }
		})
		.state('setup.user', {
			url : '/user',
			template: '<div>===>>>  Setup User  <<<===</div>',
			controller: 'MainSetupUserCtrl'
		})
		.state('setup.role', {
			url : '/role',
			template: '<div>===>>>  Setup Role  <<<===</div>',
			controller: 'MainSetupRoleCtrl'
		})

}])

.controller('MainShopProductCtrl', function($scope) {
	$scope.products = [
		{id:1, name:'aaa', price:5},
		{id:2, name:'bbb', price:10},
		{id:3, name:'ccc', price:20},
		{id:4, name:'ddd', price:500},
	]
})

.controller('MainShopProductDetailCtrl', function($scope, $stateParams) {
	$scope.stateParams = $stateParams;
})

.controller('SidenavDashboardCtrl', function() {})
.controller('MainDashboardCtrl', function() {})
.controller('SidenavShopCtrl', function() {})
.controller('MainShopCtrl', function() {})
.controller('MainShopCategoryCtrl', function() {})
.controller('MainShopPromotionCtrl', function() {})
.controller('SidenavSetupCtrl', function() {})
.controller('MainSetupCtrl', function() {})
.controller('MainSetupUserCtrl', function() {})
.controller('MainSetupRoleCtrl', function() {})

;
