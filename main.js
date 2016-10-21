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

// Funciones de controladores
MainController.$inject = ['$scope'];
function MainController ($scope){
			$scope.message = 'Esta es la página de "Home"';
}

AcercaController.$inject = ['$scope'];
function AcercaController ($scope){
			$scope.message = 'Esta es la página acerca';
}

PortfolioController.$inject = ['$scope', '$http'];
function PortfolioController ($scope, $http){

    $http({
        method : "GET",
        url : "http://appmcf.ayudapyme.es/GETALLREC"
    		}).then(function mySucces(response) {

				var datos = response.data;

        $scope.listaAsociaciones = [];

        for (var i=0; i < datos.Recursos.length;i++){
					datos.Recursos[i].img = "img/recurso/"+datos.Recursos[i].Id+"/main.jpg"
					$scope.listaAsociaciones.push(datos.Recursos[i]);
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
		

}
