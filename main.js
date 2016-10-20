// Creación del módulo
var angularRoutingApp = angular.module('angularRoutingApp', ['ngRoute'])
												.config(function($routeProvider) {
													$routeProvider
																.when('/', {
																	templateUrl	: 'vistas/home.html',
																	controller 	: 'mainController'
																})
																.when('/acerca', {
																		templateUrl : 'vistas/acerca.html',
																		controller  : 'acercaController'
																})
																.when('/portfolio', {
																		templateUrl : 'vistas/portfolio.html',
																		controller  : 'portfolioController'
																})
																.when('/servicios', {
																		templateUrl : 'vistas/servicios.html',
																		controller  : 'serviciosController'
																})
																.when('/equipo', {
																		templateUrl : 'vistas/equipo.html',
																		controller  : 'equipoController'
																})
																.when('/calendario', {
																		templateUrl : 'vistas/calendario.html',
																		controller  : 'calendarioController'
																})
																.when('/mapa', {
																		templateUrl : 'vistas/mapa.html',
																		controller  : 'mapaController'
																})
																.when('/contacto', {
																		templateUrl : 'vistas/contacto.html',
																		controller  : 'contactoController'
																})
																.otherwise({
																	redirectTo: '/'
																});
												})
												.service('GetAsociaciones',GetAsociaciones)
												.controller('mainController', MainController)
												.controller('acercaController', AcercaController)
												.controller('portfolioController', PortfolioController )
												.controller('serviciosController', ServiciosController)
												.controller('equipoController', EquipoController)
												.controller('calendarioController', CalendarioController)
												.controller('mapaController', MapaController)
												.controller('contactoController', ContactoController);


// Configuración de las rutas



// Funciones de controladores
MainController.$inject = ['$scope'];
function MainController ($scope){
			$scope.message = 'Esta es la página de "Home"';
}
AcercaController.$inject = ['$scope'];
function AcercaController ($scope){
			$scope.headerstyle = "background-image:  url('img/header-nav.jpg')";
}

PortfolioController.$inject = ['$scope', '$http'];
function PortfolioController ($scope, $http){
			// $scope.message = 'Esta es la página de "Portfolio"';
			//
			// var Asociaciones = this;
			//
			// Asociaciones.items = GetAsociaciones.getRecursos();
//
//
//											//var vm = this;
//
// var url = "http://appmcf.ayudapyme.es/GETALLREC";
// var ajaxrec = new XMLHttpRequest();
//
//							        function ReciboDatos (){
//							                if (ajaxrec.readyState == 4 && ajaxrec.status == 200){
//							                    var datos = ajaxrec.responseText;
//								                var Json = JSON.parse(datos);  
//																	//console.log("Json: ", Json);
//																	$scope.listaAsociaciones = [];
//																	for (var i=0; i < Json.Recursos.length;i++){
//																		  Json.Recursos[i].img = "img/recurso/"+Json.Recursos[i].Id+"/main.jpg"
//																			$scope.listaAsociaciones.push(Json.Recursos[i]);
//																		}
//																	console.log("Scope Json: ", $scope.listaAsociaciones);
//																	$scope.$apply();
//							                }
//							        }
//
//							        ajaxrec.onreadystatechange = ReciboDatos;
//							        ajaxrec.open("GET",url);
//							     //   ajaxrec.setRequestHeader('Content-type', 'text/json; charset=UTF-8')
//							        ajaxrec.send();


    $http({
        method : "GET",
        url : "http://appmcf.ayudapyme.es/GETALLREC"
    }).then(function mySucces(response) {
        var datos = response.data;
        var Json = JSON.parse(datos);
        $scope.listaAsociaciones = [];
        
        for (var i=0; i < Json.Recursos.length;i++){
		Json.Recursos[i].img = "img/recurso/"+Json.Recursos[i].Id+"/main.jpg"
		$scope.listaAsociaciones.push(Json.Recursos[i]);
        }
		
        console.log("Scope Json: ", $scope.listaAsociaciones);
        
    }, function myError(response) {
        $scope.eRRor = response.statusText;
    });



}
ServiciosController.$inject = ['$scope'];
function ServiciosController ($scope){
			$scope.message = 'Esta es la página de "Servicios"';
}
EquipoController.$inject = ['$scope'];
function EquipoController ($scope){
			$scope.message = 'Esta es la página de "Equipo"';
}
CalendarioController.$inject = ['$scope'];
function CalendarioController ($scope){
			$scope.message = 'Esta es la página de "Calendario"';
}
MapaController.$inject = ['$scope'];
function MapaController ($scope){
			$scope.message = 'Esta es la página de "Mapa"';
}
ContactoController.$inject = ['$scope'];
function ContactoController ($scope){
			$scope.message = 'Esta es la página de "Contacto"';
}
GetAsociaciones.$inject = ['$scope'];
function GetAsociaciones($scope) {

								var vm = this;

								vm.getRecursos = function () {

							  var url = "http://appmcf.ayudapyme.es/GETALLREC";
				        var ajaxrec = new XMLHttpRequest();

				        function ReciboDatos (){
				                if (ajaxrec.readyState == 4 && ajaxrec.status == 200){
				                    var datos = ajaxrec.responseText;
					                  var Json = JSON.parse(datos);
														return Json;
				                }
				        }

				        ajaxrec.onreadystatechange = ReciboDatos;
				        ajaxrec.open("GET",url);
				     //   ajaxrec.setRequestHeader('Content-type', 'text/json; charset=UTF-8')
				        ajaxrec.send();

							}

}
