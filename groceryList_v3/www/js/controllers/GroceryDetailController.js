/**
 * Created by andrei.antal on 21/11/14.
 */
app.controller('GroceryDetailCtrl',[ '$scope','$state','$stateParams','GroceryService', function ($scope,$state,$stateParams,GroceryService) {
    $scope.goBack = function() {
        $state.go('typeList');
    };

    $scope.currentItem = {};
    var newItem = ($stateParams.id == undefined || $stateParams.id == "" || $stateParams.id == null);

    if(!newItem)
    {
        $scope.newItem = false;
        $scope.currentItem = GroceryService.getGroceryType($stateParams.id)
    }

    $scope.saveItem = function()
    {
        if(newItem)
        {
            GroceryService.addNewGroceryType($scope.currentItem);
            $state.go('typeList');
        }
        else
        {
            GroceryService.editGroceryType($scope.currentItem);
            $state.go('typeList');
        }
    }

}]);