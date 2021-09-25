customElements.define('pv-tabbar', class extends HTMLElement {
  constructor() {
    super()
  }

  /**
    * 元素每次插入到 DOM 时都会调用。用于运行安装代码，例如获取资源或渲染。一般来说，您应将工作延迟至合适时机执行。
    */
  connectedCallback() {
    let shadow = this.attachShadow({ mode: 'open' })
    let path_splits = location.pathname.split('/')
    let filename = path_splits[path_splits.length - 1] || 'index.html'
    shadow.innerHTML = `
      <link rel="stylesheet" href="/css/custom.css">
      <style>
        .tabbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: white;
          box-shadow: 0 -1px 4px 0 #ddd;
        }

        footer.tabbar {
          height: 44px;
        }

        .tabbar-item {
          display: flex;
          justify-content: center;
          align-items: center;
          flex: 1;
          height: 100%;
          color: #333;
          text-decoration: none;
          color: #999;
        }

        .tabbar-item.selected {
          color: #333;
        }

        .tabbar-item svg {
          width: 44px;
          height: 44px;
          padding: 10px;
        }
      </style>
      <footer class="tabbar">
        ${filename === 'index.html' ? `<a class="tabbar-item selected" href="#"><svg t="1602836868809" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5053" width="200" height="200"><path d="M422.912 404.672c0 46.72-37.888 84.672-84.672 84.672-46.656 0-84.672-37.888-84.672-84.672C253.568 357.824 291.584 320 338.24 320 385.024 320 422.912 357.824 422.912 404.672zM820.544 768c0 0-34.944-274.432-139.648-274.432-104.768 0-139.712 134.912-209.408 134.912-69.952 0-69.952-33.728-139.776-33.728C261.888 594.752 192 768 192 768L820.544 768 820.544 768zM896 128 128 128l0 704 768 0L896 128M896 64c35.392 0 64 28.672 64 64l0 704c0 35.392-28.608 64-64 64L128 896c-35.328 0-64-28.608-64-64L64 128c0-35.328 28.672-64 64-64L896 64 896 64z" p-id="5054" fill="#333333"></path></svg></a>` : `<a class="tabbar-item" href="index.html"><svg t="1602836868809" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5053" width="200" height="200"><path d="M422.912 404.672c0 46.72-37.888 84.672-84.672 84.672-46.656 0-84.672-37.888-84.672-84.672C253.568 357.824 291.584 320 338.24 320 385.024 320 422.912 357.824 422.912 404.672zM820.544 768c0 0-34.944-274.432-139.648-274.432-104.768 0-139.712 134.912-209.408 134.912-69.952 0-69.952-33.728-139.776-33.728C261.888 594.752 192 768 192 768L820.544 768 820.544 768zM896 128 128 128l0 704 768 0L896 128M896 64c35.392 0 64 28.672 64 64l0 704c0 35.392-28.608 64-64 64L128 896c-35.328 0-64-28.608-64-64L64 128c0-35.328 28.672-64 64-64L896 64 896 64z" p-id="5054" fill="#999999"></path></svg></a>`}
        ${filename === 'person.html' ? `<a class="tabbar-item selected" href="#"><svg t="1602836640646" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4080" width="200" height="200"><path d="M798.293333 294.48192C798.293333 133.730987 667.989333 3.413333 507.231573 3.413333A288.93184 288.93184 0 0 0 301.056 88.814933a291.181227 291.181227 0 0 0-40.7552 51.9168c-84.40832 137.014613-41.762133 316.501333 95.25248 400.909654l15.049387 9.352533-16.687787 6.106453c-179.41504 65.41312-298.83392 236.014933-298.89536 426.980694v0.4096c0.12288 14.94016 12.315307 26.958507 27.2384 26.835626l0.013653-0.006826c14.926507-0.09216 26.948267-12.305067 26.835627-27.245227 0.546133-219.706027 178.40128-397.738667 398.124373-398.513493 160.750933 0 291.06176-130.327893 291.06176-291.078827z m-292.898133 225.181013c-123.51488-0.781653-223.013547-101.556907-222.22848-225.078613 0.781653-123.531947 101.56032-223.023787 225.08544-222.23872 122.965333 0.785067 222.231893 100.693333 222.22848 223.665493v1.41312c-0.781653 123.52512-101.56032 223.023787-225.08544 222.23872zM731.091627 580.672853c-17.28512-9.60512-39.092907-3.35872-48.70144 13.929814-9.591467 17.29536-3.355307 39.09632 13.93664 48.6912 123.96544 68.901547 200.874667 199.574187 200.88832 341.405013 0 19.8144 16.069973 35.887787 35.90144 35.887787 19.82464 0 35.877547-16.073387 35.877546-35.887787-0.116053-167.857493-91.15648-322.47808-237.902506-404.026027z" p-id="4081" fill="#333333"></path></svg></a>` : `<a class="tabbar-item" href="person.html"><svg t="1602836640646" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4080" width="200" height="200"><path d="M798.293333 294.48192C798.293333 133.730987 667.989333 3.413333 507.231573 3.413333A288.93184 288.93184 0 0 0 301.056 88.814933a291.181227 291.181227 0 0 0-40.7552 51.9168c-84.40832 137.014613-41.762133 316.501333 95.25248 400.909654l15.049387 9.352533-16.687787 6.106453c-179.41504 65.41312-298.83392 236.014933-298.89536 426.980694v0.4096c0.12288 14.94016 12.315307 26.958507 27.2384 26.835626l0.013653-0.006826c14.926507-0.09216 26.948267-12.305067 26.835627-27.245227 0.546133-219.706027 178.40128-397.738667 398.124373-398.513493 160.750933 0 291.06176-130.327893 291.06176-291.078827z m-292.898133 225.181013c-123.51488-0.781653-223.013547-101.556907-222.22848-225.078613 0.781653-123.531947 101.56032-223.023787 225.08544-222.23872 122.965333 0.785067 222.231893 100.693333 222.22848 223.665493v1.41312c-0.781653 123.52512-101.56032 223.023787-225.08544 222.23872zM731.091627 580.672853c-17.28512-9.60512-39.092907-3.35872-48.70144 13.929814-9.591467 17.29536-3.355307 39.09632 13.93664 48.6912 123.96544 68.901547 200.874667 199.574187 200.88832 341.405013 0 19.8144 16.069973 35.887787 35.90144 35.887787 19.82464 0 35.877547-16.073387 35.877546-35.887787-0.116053-167.857493-91.15648-322.47808-237.902506-404.026027z" p-id="4081" fill="#999999"></path></svg></a>`}
      </footer>
    `
    shadow.querySelectorAll('.tabbar-item').forEach((tabbar_item, idx) => {
      tabbar_item.addEventListener('click', _ => {
        let event = new Event('click_tabbar_item')
        event.detail = { idx }
        document.dispatchEvent(event)
      })
    })
  }

  /**
   *     元素每次从 DOM 中移除时都会调用。用于运行清理代码（例如移除事件侦听器等）。
   */
  disconnectedCallback() {
    console.log('disconnected!')
  }

  /**
   * 设置被监听的属性
   */
  static get observedAttributes() {

  }

  /**
   * 属性添加、移除、更新或替换。解析器创建元素时，或者升级时，也会调用它来获取初始值。Note: 仅 observedAttributes 属性中列出的特性才会收到此回调。
   */
  attributeChangedCallback(attr_name, old_val, new_val) {
    console.log('ttribute changed!')
  }

  /**
   * 自定义元素被移入新的 document（例如，有人调用了 document.adoptNode(el)）。
   */
  adoptedCallback() {
    console.log('adopted!')
  }
})

customElements.define('pv-one-card', class extends HTMLElement {
  constructor() {
    super()
  }

  /**
    * 元素每次插入到 DOM 时都会调用。用于运行安装代码，例如获取资源或渲染。一般来说，您应将工作延迟至合适时机执行。
    */
  connectedCallback() {
    let data = this.data
    // console.log({ data })
    let shadow = this.attachShadow({ mode: 'open' })
    shadow.innerHTML = `
      <link rel="stylesheet" href="css/custom.css">
      <style>
        .card {
          position: relative;
          display: block;
          border-radius: 16px;
          overflow: hidden;
          padding-bottom: 10px;
          background-color: white;
          margin-bottom: 40px;
          text-decoration: none;
        }

        .card img {
          width: 100%;
          height: 50vw;
          max-height: 300px;
          object-fit: cover;
          vertical-align: top;
        }

        .card svg {
          width: 44px;
          height: 44px;
          padding: 10px;
        }

        .card p, .card pre {
          font-size: 14px;
          color: #666;
          padding: 10px 10px 0;
        }

        .card .author {
          font-size: 12px;
          color: #999;
        }

        @media screen and (min-width: 480px) {
          .card {
            width: 360px;
          }
        }
      </style>
      <a class="card" href="/huawei_quick/pixivim/detail.html?id=${data.objectId}">
        <img
          src="${data.img}"
          alt="card-img">
        <pre class="overflow">${data.description}</pre>
        <p class="overflow author">
          上传人：${data.author} 时间：${formatDate(data.createdAt)}
        </p>
      </a>
    `
  }

  /**
   *     元素每次从 DOM 中移除时都会调用。用于运行清理代码（例如移除事件侦听器等）。
   */
  disconnectedCallback() {
    console.log('disconnected!')
  }

  /**
   * 设置被监听的属性
   */
  static get observedAttributes() {

  }

  /**
   * 属性添加、移除、更新或替换。解析器创建元素时，或者升级时，也会调用它来获取初始值。Note: 仅 observedAttributes 属性中列出的特性才会收到此回调。
   */
  attributeChangedCallback(attr_name, old_val, new_val) {
    console.log('ttribute changed!')
  }

  /**
   * 自定义元素被移入新的 document（例如，有人调用了 document.adoptNode(el)）。
   */
  adoptedCallback() {
    console.log('adopted!')
  }
})

customElements.define('pv-comment', class extends HTMLElement {
  connectedCallback() {
    let shadow = this.attachShadow({ mode: 'open' })
    let data = this.data
    shadow.innerHTML = `
      <link rel="stylesheet" href="css/custom.css">
      <style>
        .comment {
          margin-bottom: 10px;
        }

        .author {
          font-size: 12px;
          color: #999;
        }

        .content {
          font-size: 14px;
          color: #666;
          word-break: break-all;
        }
      </style>
      <div class="comment flex">
        <p class="author">~${data.author}：</p>
        <pre class="content f1">${data.content}</pre>
      </div>
    `
  }
})
customElements.define('pv-cell', class extends HTMLElement {
  constructor() {
    super()
  }

  /**
    * 元素每次插入到 DOM 时都会调用。用于运行安装代码，例如获取资源或渲染。一般来说，您应将工作延迟至合适时机执行。
    */
  connectedCallback() {
    let shadow = this.attachShadow({ mode: 'open' })
    shadow.innerHTML = `
      <style>
        .cell {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 44px;
          border-bottom: 1px solid #ddd;
        }
        .cell svg.right-arrow-icon {
          width: 24px;
          height: 24px;
        }
      </style>
      <div class="cell">
        <slot></slot>
        <svg t="1602839325818" class="right-arrow-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
          p-id="6661" width="200" height="200">
          <path d="M689.621 512l-328.832-328.832-60.331 60.331 268.501 268.501-268.501 268.501 60.331 60.331z" p-id="6662"
            fill="#dddddd"></path>
        </svg>
      </div>
    `
  }

  /**
   *     元素每次从 DOM 中移除时都会调用。用于运行清理代码（例如移除事件侦听器等）。
   */
  disconnectedCallback() {
    console.log('disconnected!')
  }

  /**
   * 设置被监听的属性
   */
  static get observedAttributes() {

  }

  /**
   * 属性添加、移除、更新或替换。解析器创建元素时，或者升级时，也会调用它来获取初始值。Note: 仅 observedAttributes 属性中列出的特性才会收到此回调。
   */
  attributeChangedCallback(attr_name, old_val, new_val) {
    console.log('ttribute changed!')
  }

  /**
   * 自定义元素被移入新的 document（例如，有人调用了 document.adoptNode(el)）。
   */
  adoptedCallback() {
    console.log('adopted!')
  }
})