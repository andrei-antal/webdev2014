app.controller('GroceryListCtrl',[ '$scope', function ($scope) {

    $scope.groceryList = [];
    $scope.selectedItem = -1;

    $scope.addGroceryEntry = function(entry){
        if(entry != "")
        {
            $scope.groceryList.push({name : entry});
            $scope.groceryToAdd = "";
        }
    };

    $scope.deleteEntry = function(index)
    {
        if(index>=0 && index<$scope.groceryList.length)
        {

            $scope.groceryList.splice(index,1);
        }
    };

    $scope.newList = function() {
        console.log('here');
        $scope.groceryList = [];
    };
}]);