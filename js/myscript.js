const URL = 'https://covid19.mathdro.id/api';
const URLIN = 'https://api.covid19api.com/summary'
let app = angular.module('MyApp',[]);
app.controller('MyCtrl',($scope,$http)=>{

	$scope.title = "Stay Home Stay Safe";

	console.log("App Started");
	// Calling api
	$http.get(URL).then(
		(response)=>{
			console.log("Succes");
			console.log(response.data);

			$scope.all_data = response.data;
		}, (error)=> {
			console.log("Failed")
			console.log(error);
		});

	/*get COuntry data*/

	$scope.get_country_data = () => {
		let country = $scope.c;
		console.log(country);
		if (country = "") {
			$scope.country_data = undefined;
			return ;
		}

		$http.get(URL+'/countries/'+$scope.c).then(
			(response) => {
			console.log(`${URL}/countries/country`);
			console.log(response.data);
			$scope.country_data = response.data;
			//console.log(country_data);
		}, (error) => {
			console.log(error);
		}
		);

		
	};

	$http.get(URLIN).then(
		(response)=>{
			console.log("Succes");
			console.log(response.data);

			$scope.all_new_data = response.data;
		}, (error)=> {
			console.log("Failed")
			console.log(error);
		});

});