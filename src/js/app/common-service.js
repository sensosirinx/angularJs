function CommonService () {

  let data = []
  let item = null

  this.loadData = async () => {
    data = await makeDefaulData()
    item = null
    return data
  }

  this.getData = () => {
    return data
  }

  this.setData = (value) => {
    data.push(value)
  }

  this.getUniqTags = () => {
    if (data.length > 0) {
      let tagList = []
      data.forEach((item) => {
        const tags = item.tags
        if (tags && tags.length > 0) {
          const tagsList = tags.filter((tag) => {
            return tagList.indexOf(tag) === -1
          })
          tagList = tagList.concat(tagsList)
        }
      })
      return tagList
    }
    return []
  }

  this.setItem = (value) => {
    item = value
  }

  this.getItem = () => {
    return item
  }

}
