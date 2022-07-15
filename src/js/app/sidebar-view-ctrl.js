function sidebarViewCtrl ($scope, $element, CommonService) {

  $scope.model = {
    item: null,
    newTag: ''
  }

  $scope.$watch(function () {
    return CommonService.getItem()
  }, function(item) {
    $scope.model.item = item
  }, true)

  $scope.addTag = () => {
    if ($scope.model.newTag !== '') {
      const item = $scope.model.item
      const tags = item.tags
      if (tags.indexOf($scope.model.newTag) === -1) {
        tags.push($scope.model.newTag)
      }
    }
  }

  $scope.deleteTag = (tag) => {
    const item = $scope.model.item
    const tags = item.tags
    const index = tags.indexOf(tag)
    if (index !== -1) {
      tags.splice(index, 1);
    }
  }

}
