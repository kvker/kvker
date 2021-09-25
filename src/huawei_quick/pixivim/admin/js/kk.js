class KK {
  constructor(data) {
    this.query_params = this.getQueryParams()
    this.el = {}
    // 挂载所有初始id
    this.init(data)
  }

  init(data) {
    console.log('init data: ' + JSON.stringify(data))
    let id_els = this.queryAll('*[id]')
    for(const el of id_els) {
      this.el[el.id] = el
    }
    this.update(data)
  }

  regist(key) {
    this.el[key] = this.queryID(key)
  }

  unregist(key) {
    delete this.el[key]
  }

  /**
   * 更新数据
   * @param {object} data 需要更新的监听对象们
   * @param {string} update_type HTML插入的地方, 默认追加
   */
  update(data, update_type = 'beforeend') {
    for(const key in data) {
      if(data.hasOwnProperty(key)) {
        const value = data[key]
        if(value.regexp) {
          // 正则
          let regexp = new RegExp(key)
          // console.log(regexp)
          for(const key in this.el) {
            if(this.el.hasOwnProperty(key)) {
              if(regexp.test(key)) {
                const dom = this.el[key]
                // value为对象则是修改属性
                if(value instanceof Object) {
                  for(const key of Object.keys(value)) {
                    dom.setAttribute(key, value[key])
                  }
                } else {
                  // value不是对象则是修改innerText或value
                  dom.value = value
                  dom.innerText = value
                }
              }
            }
          }
        } else {
          let dom = this.el[key]
          // 如果还没有, 则绑定
          if(!dom) {
            dom = this.queryID(key)
            // 如果有实例就挂上去
            if(dom) {
              this.el[key] = dom
            }
          }
          // value为对象则是修改属性
          if(value instanceof Object) {
            for(const key of Object.keys(value)) {
              if(key === 'html') {
                if(update_type === 'replace') {
                  dom.innerHTML = ''
                  update_type = 'beforeend'
                }
                dom.insertAdjacentHTML(update_type, value.html)
              } else if(key === 'value') {
                dom.value = value.value
              } else {
                dom.setAttribute(key, value[key])
              }
            }
          } else {
            // value不是对象则是修改innerText或value
            dom.value = value
            dom.innerText = value
          }
        }
      }
    }
  }

  /////////////////////////////////////////////////////////
  // 下面为工具, 与库无关, 可无视
  /////////////////////////////////////////////////////////

  /**
   * dom搜索
   * @param {string} selector document.querySelector封装一层
   */
  query(selector) {
    return document.querySelector(selector)
  }

  /**
   * dom搜索
   * @param {string} selector document.querySelector封装一层
   */
  queryID(id) {
    return document.querySelector(`#${id}`)
  }

  /**
   * dom搜索
   * @param {string} selector document.querySelectorAll封装一层
   */
  queryAll(selector) {
    return document.querySelectorAll(selector)
  }

  /**
   * 获取链接的query对象
   */
  getQueryParams() {
    let query_params = {}
    let kvs = location.search.substr(1).split('&')
    for(const key in kvs) {
      if(kvs.hasOwnProperty(key)) {
        const value = kvs[key]
        let kv = value.split('=')
        query_params[kv[0]] = kv[1]
      }
    }
    return query_params
  }
}