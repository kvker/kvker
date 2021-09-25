customElements.define('md-top', class extends HTMLElement {
  constructor() {
    super()
  }

  /**
    * 元素每次插入到 DOM 时都会调用。用于运行安装代码，例如获取资源或渲染。一般来说，您应将工作延迟至合适时机执行。
    */
  connectedCallback() {
    this.attachShadow({ mode: 'open' })
    let no_left = this.getAttribute('no_left') || this.getAttribute('no_back')
    // console.log(no_left)
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="/css/custom.css">
      <style>
        :host {
          width: 100%;
          height: 44px;
          color: white;
          background-color: #666;
        }
      </style>
      <nav class="flex jcsb aic">
        <slot name="left">
          <a ${no_left ? 'hidden' : ''} style="width: 44px;height: 44px;" href="javascript: history.back()"><svg style="width: 100%;height: 100%;padding: 10px;" t="1602647615228" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1979" width="200" height="200"><path d="M238.336 512l374.528 374.528 60.330667-60.330667-313.984-314.453333 310.954666-310.912-60.330666-60.330667z" fill="#ffffff" p-id="1980"></path></svg></a>
          <div ${no_left ? '' : 'hidden'} style="width: 44px;height:44px;"></div>
        </slot>
        <slot></slot>
        <slot name="right">
          <div style="width: 44px;height:44px;"></div>
        </slot>
      </nav>
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