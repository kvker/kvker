// 把画师不小心传到了话题
av.read('TopicFileMap', q => {
  q.limit(1000)
  q.equalTo('topic', av.AV.Object.createWithoutData('Topic', '5f1a50ea2f580d0008ff8b96'))
}).then(async ret => {
  let file_url_list = ret.map(i => i.get('file_url'))
  console.log(file_url_list.length)
  let i = 0
  for (let file_url of file_url_list) {
    await av.create('ArtistFileMap', {
      artist: av.AV.Object.createWithoutData('Artist', '5ec276dc086e1f00089b17ca'),
      file_url,
    })
    console.log(++i)
  }
})

// 原图为空的收藏搜索
av.read('Collection', q => {
  q.limit(1000)
  q.skip(1000)
  q.include('target_artist_file')
  q.include('target_topic_file')
}).then(ret => {
  let empty_list = ret.map(i => {
    return i.get('target_artist_file').get('file_url') || i.get('target_topic_file').get()
  })
  console.log(ret.length)
  console.log(empty_list.length)
})