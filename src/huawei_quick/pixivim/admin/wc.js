// 通用导航
class PtNav extends HTMLElement {
  /**
   * 创建或升级元素的一个实例。用于初始化状态、设置事件侦听器或创建 Shadow DOM。参见规范，了解可在 constructor 中完成的操作的相关限制。
   */
  constructor() {
    super()
    let shadow = this.attachShadow({ mode: 'open' })
    shadow.appendChild(this.createHTML())
  }

  /**
   * 元素每次插入到 DOM 时都会调用。用于运行安装代码，例如获取资源或渲染。一般来说，您应将工作延迟至合适时机执行。
   */
  connectedCallback() {
    console.log('connected!')
  }

  /**
   * 	元素每次从 DOM 中移除时都会调用。用于运行清理代码（例如移除事件侦听器等）。
   */
  disconnectedCallback() {
    console.log('disconnected!')
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

  createHTML() {
    return this.html2template`
      <nav>
        <a href="./">${'日推'}</a>
        <a href="./day_manual.html">${'手动日推'}</a>
        <a href="./artist.html">${'画师'}</a>
        <a href="./artist_manual.html">${'手动画师'}</a>
        <a href="./topic.html">${'专题'}</a>
        <a href="./topic_manual.html">${'手动专题'}</a>
        <a href="/">${'首页'}</a>
      </nav>
    `
  }

  html2template(p0, ...p1) {
    let result = p1.reduce((p, c, idx) => {
      p += p0[idx] + c
      if(idx === p1.length - 1) {
        p += p0[p1.length]
      }
      return p
    }, '')
    let temp = document.createElement('template')
    temp.innerHTML = result
    return temp.content.cloneNode(true)
  }
}

customElements.define('pt-nav', PtNav)