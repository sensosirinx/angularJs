function contentViewCtrl ($scope, $element, CommonService) {

  $scope.model = {
    items: [],
    order: 'title',
    onlyDate: false,
    searchText: '',
    itemsFound: [],
    newTitle: ''
  }

  $scope.$watch(function () {
    return CommonService.getData()
  }, function(newData) {
    $scope.model.items = newData
    $scope.search()
  }, true)

  $scope.showDate = (date) => {
    const timestamp = Date.parse(date)
    let dateTime = new Date(timestamp).toLocaleString().split(', ')
    if ($scope.model.onlyDate) {
      return dateTime[0]
    }
    return `${dateTime[0]} ${dateTime[1]}`
  }

  $scope.search = () => {
    const text = $scope.model.searchText
    $scope.model.itemsFound = $scope.model.items.filter((item) => {
      return item.title.includes(text)
    })
  }

  $scope.addItem = () => {
    if ($scope.model.newTitle !== '') {
      const item = {
        id: makeDataId(),
        title: $scope.model.newTitle,
        tags: [],
        date: new Date().toISOString(),
      }
      CommonService.setData(item)
    }
  }

  $scope.setItem = (item) => {
    CommonService.setItem(item)
  }

}
