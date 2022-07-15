function summaryViewCtrl ($scope, $element, CommonService) {

  $scope.model = {
    items: [],
    tags: []
  }

  $scope.$watch(function () {
    return CommonService.getData()
  }, function(newData) {
    $scope.model.items = newData
    $scope.model.tags = CommonService.getUniqTags()
  }, true)

}
