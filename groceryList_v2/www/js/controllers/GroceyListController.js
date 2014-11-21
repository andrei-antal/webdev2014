app.controller('GroceryListCtrl',[ '$scope','$state', function ($scope,$state) {

    $scope.groceryList = [{name:"a1"},{name:"a2"}];

    $scope.addGroceryEntry = function(entry){
        if(entry != "")
        {
            $scope.groceryList.push({name : entry});
            $scope.groceryToAdd = "";
        }
    };

    $scope.deleteGroceryEntry = function(index)
    {
        if(index>=0 && index<$scope.groceryList.length)
        {

            $scope.groceryList.splice(index,1);
        }
    };

    $scope.newGroceryList = function() {
        console.log('here');
        $scope.groceryList = [];
    };

    $scope.goToItemDetail = function() {
        $state.go('listDetail');
    }
}]);