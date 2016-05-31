var baasket = angular.module('baasket', ['checklist-model']);

baasket.controller('controller', ['$scope', '$filter', function($scope, $filter) {

	$scope.showDetail = function(product){
		$scope.selectedProduct = product;
		$('#detail').openModal();
	};

	$scope.grab = function(what, callback){
		$scope.ref.child(what).on('value', function(snapshot) {
			$scope[what] = [];
			$scope.$apply(function () {
				angular.forEach(snapshot.val(), function(value, key){
					$scope[what].push(value);
				});

				console.log($scope[what]);
				if (callback)
					callback($scope[what]);
		
			});

		});
	}

	$scope.init = function(){

			$scope.grab('products', function(products){
				angular.forEach(products, function(product){
					if (product.languages){
						product.languages = product.languages.map(function(obj){
							if (obj.value)
								return obj.label;
						}).filter(unique);
					}
					if (product.features)
						product.features = product.features.map(p('name'));
				});

				$scope.companies =
					$scope.products.map(p('company')).filter(unique).sort();

				$scope.languages = 
					$scope.products.map(p('languages')).reduce(combine).filter(unique).sort();

				$scope.features = 
					$scope.products.map(p('features')).reduce(combine).filter(unique).sort();

				$scope.checklist = $scope.languages.concat($scope.companies).concat($scope.features);
				$scope.loaded = true;

			});

	};

	$scope.ref = new Firebase('https://webhook.firebaseio.com/buckets/baasket/01f0e387-f9ef-41f4-a29b-913ee1d576ab/dev/data');
	$scope.loaded = false;
	$scope.init();

	$scope.searchFor = function(term){
		$('.modal-close').click();
		$scope.search = term;
		$('#search input').focus();
	};

	$scope.values={};

	$scope.gigabyte = Math.pow(2, 30);

	$scope.filters = {

		//'num_users' : {text: 'Number of users', min: '0', max: '100'},
	  'db_storage': {text: 'Database GB stored', min: '0', max: '100'},
		//'db_transfer': {text: 'GB transferred', min: '0', max: 100*$scope.gigabyte}

	};

	$scope.cost = function(product){
		return product.plans? $scope.planCost(product.plans[0]) : null;
	}

	$scope.planCost = function(plan){
		var cost = plan.cost || 0;
		angular.forEach($scope.filters, function(value, key){
			if (plan[key]!=null)
				cost += plan[key+'_over'] * Math.max($scope.values[key] - plan[key], 0);
		});
		return cost;
	}

	//Gotta watch, Materialize overrides default select :)
	$scope.$watchGroup(
		['products', 'compareA', 'compareB'], 
		function(){
			$('select').material_select();
		}
	);

}]);

baasket.directive('slider', function() {
    return {
        restrict: 'E',
        template: '<input type="range">',
        replace: true,
        transclude: true,
        link: function($scope, elem, attr) {
            elem.attr('max', attr.max);
        }
    }
});

baasket.filter('bytes', function() {
	return function(bytes, precision) {
		if (isNaN(parseFloat(bytes)) || !isFinite(bytes) || bytes==0) return '-';
		if (typeof precision === 'undefined') precision = 1;
		var units = ['bytes', 'kB', 'MB', 'GB', 'TB', 'PB'],
			number = Math.floor(Math.log(bytes) / Math.log(1024));
		return (bytes / Math.pow(1024, Math.floor(number))).toFixed(precision) +  ' ' + units[number];
	}
});

baasket.filter('checklistFilter', function() {
    return function checklistFilter(products, checklist) {
        var result = [];

        angular.forEach(products, function(product){
        	product.included = false;
        	angular.forEach(checklist, function(item){
	        		if (!product.included && (
	        			(product.languages && product.languages.indexOf(item)!=-1)
	        			|| (product.company && product.company.indexOf(item)!=-1)
	        			|| (product.features && product.features.indexOf(item)!=-1)
	        			)){
	        			result.push(product);
	        			product.included = true;
	        		}
        	});
        });

        return result;

    }
});

function unique(value, index, self) { 
	if (value) return self.indexOf(value) === index;
}

function combine(pre, cur) {
	return pre.concat(cur);
}

function p(name){
	return (function(name, obj){
		if (obj)
			return obj[name];
	}).bind(null, name);
}