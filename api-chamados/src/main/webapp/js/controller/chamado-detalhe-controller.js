appEntra21.controller("chamadoDetalheController", function($scope, $http,
		$routeParams) {

	$scope.chamadoDetalhe = {};
	
	var url = 'http://localhost:8080/api-entra21/rest/chamados/';

		$http.get(url + $routeParams.id).then(function(response) {
			$scope.chamadoDetalhe = response.data;
			$scope.chamado = response.data
			console.log('success - chamadoDetalheController');
			console.log(response.data);
			console.log(response.status);

		}, function(response) {
			console.log('error- chamadoDetalheController');
			console.log(response.data);
			console.log(response.status);
		});
		
		$scope.updateChamado = function() {			
			metodo = 'PUT';		

			$http({
				method : metodo,
				url : url,
				data : $scope.chamadoDetalhe
			}).then(function(response) {
				alert("salvo");
			}, function(response) {
				console.log('error do salvar');
				console.log(response.data);
				console.log(response.status);
			});
		};
});