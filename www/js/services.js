angular.module('cordpress.services', [])

.factory('DataLoader', function ($http) {

	return {
		all: function (url) {
			return $http.jsonp(url);
		},
		get: function (url) {
			// Simple index lookup
			return $http.jsonp(url);
		}
	}

});