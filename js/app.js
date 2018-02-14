var it = {};
angular.module('simpleSite', [])
	.factory('config', function ($http) {
		var config = {
			parse: {
				appId: 		'7FVlJUoRcMIETEPL2zaVhmlLiycLmFODd3zr35NS',
				restKey: 	'fu1WIvXIxeG9RlEbVUAryZKsCWhrRlpc1WoONFyh'
			},
			parentApp: {
				appId: 		'pzlNsaEz6hNmIntH42OOwiFfDBNZAB1YNL1oj3fV',
				restKey: 	'ty6cmbnYjF72IIzQXzlgB548vuCh8NOdCVUJVGmz',
			},
			firebase: 'https://jhcc-main.firebaseio.com/'
		}
		$http.defaults.headers.common['X-Parse-Application-Id'] = config.parse.appId;
		$http.defaults.headers.common['X-Parse-REST-API-Key'] = config.parse.restKey;
		$http.defaults.headers.common['Content-Type'] = 'application/json';
		
		return config;
	})
	.factory('settings', function ($http) {
		return {
			title: 'Thunder Run Quarry',
			brand: 'Thunder Run'
		}
	})
	.controller('MaterialCtrl', function($http, $scope, config) {
		$scope.list = [
			{
				//"image": "images/1.jpg",
				"title":"NM DOT Spec BC - 3/4 Minus"
			},{
				//"image": "images/2.jpg",
				"title":"Crushed Fines"
			},{
				//"image": "images/3.jpg",
				"title":"3/8 Road Chat"
			},{
				//"image": "images/4.jpg",
				"title":"3/4 Screenings (Light)"
			},{
				//"image": "images/5.jpg",
				"title":"Rip Rap 4\" - 8\""
			},{
				//"image": "images/6.jpg",
				"title":"3/4 Screenings (Dark)"
			},{
				//"image": "images/7.jpg",
				"title":"Rip Rap 18\" - 36\""
			}
		]
		it.MaterialCtrl = $scope;
	})
	.controller('ContactCtrl', function($http, $scope, config) {
		var tools = $scope.tools = {
			email: function(email){
				$http.post('https://api.parse.com/1/functions/Email', email).success(function(data){
					email = {};
					$scope.alert = {
						type: 'success',
						msg: data.result
					}
				}).error(function(data){
					$scope.alert = {
						type: 'error',
						msg: data.result
					}
				})
			}
		}
	});
