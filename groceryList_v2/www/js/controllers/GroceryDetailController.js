/**
 * Created by andrei.antal on 21/11/14.
 */
app.controller('GroceryDetailCtrl',[ '$scope','$state', function ($scope,$state) {

    $scope.goBack = function(){
        $state.go('mainList');
    }
}]);