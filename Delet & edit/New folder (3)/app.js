var obj=angular.module("myapp",[]);
obj.controller("Democtrl",function($scope){
  $scope.contacts=
       [
          {name:"sai",class:98666535},
          {name:"ram",class:88956845},
          {name:"om",class:869524572}
       ];

 
  $scope.delet=function(item){
  	$scope.contacts.splice($scope.contacts.indexOf(item),1);
  }
  $scope.sub=function(){
  	$scope.contacts.push($scope.new);
  	$scope.new={};
  }
  $scope.edit=function(item){
  	$scope.new=angular.copy(item);
  }
});