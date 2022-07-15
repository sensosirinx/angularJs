function elementsViewCtrl ($scope, $element, CommonService) {

  $scope.model = {
    width: 300,
    items: []
  }

  $scope.setWidth = () => {
    let width = $scope.model.width;
    if (!width) {
      width = 1;
      $scope.model.width = width;
    }
    $element.css("width", `${width}px`)
  }
  $scope.setWidth()

  $scope.loadData = async () => {
    $scope.model.items = await CommonService.loadData()
    $scope.$apply()
  }

}
