var app=angular.module("my",[]);
app.controller("demo",function($scope){
	$scope.items=
	[
        {name:"sai",class:"10th"},
        {name:"om",class:"11th"},
        {name:"jai",class:"8th"}
	];
	$scope.add=function(){
		$scope.items.push($scope.new);
		$scope.new={};
	}
	$scope.edit=function(item){
      $scope.new=angular.copy(item);
	}
	$scope.delet=function(item){
		$scope.items.splice($scope.items.indexOf(item),1);
	}
});