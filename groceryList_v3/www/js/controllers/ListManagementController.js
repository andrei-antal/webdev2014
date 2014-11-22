app.controller('ListManagementController',[ '$scope', function ($scope) {

    $scope.groceryList = [];

    $scope.addTypeToList = function(groceryItem)
    {
        for(var i=0;i<$scope.groceryList.length;i++)
        {
            if($scope.groceryList[i].id === groceryItem.id)
            {
                $scope.groceryList[i].count++;
                return;
            }
        }

        $scope.groceryList.push(angular.extend(groceryItem, {count:1}));
    }

}]);