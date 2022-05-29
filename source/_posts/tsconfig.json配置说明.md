---
layout: note
title: tsconfig.json配置说明
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

<p>熟悉 Typescript 配置选项是 TS 项目开发的最基本要求。<br>TS 使用 <code>tsconfig.json</code> 作为其配置文件，它主要包含两块内容：</p>
<ol>
<li>指定待编译的文件</li>
<li>定义编译选项</li>
</ol>
<p>另外，一般来说，<code>tsconfig.json</code> 文件所处的路径就是当前 TS 项目的<strong>根路径</strong>。</p>
<h2 id="item-1">基本用法</h2>
<p>TS 的编译命令为 <code>tsc</code> ，当我们在命令行中直接输入 <code>tsc</code> 时，会打印出如下的使用说明：</p>
<pre class="hljs properties"><code><span class="hljs-meta">$</span> <span class="hljs-string">tsc</span>
<span class="hljs-attr">Version</span> <span class="hljs-string">2.7.2</span>
<span class="hljs-attr">Syntax</span>:   <span class="hljs-string">tsc [options] [file ...]</span>
<span class="hljs-attr">Examples</span>: <span class="hljs-string">tsc hello.ts</span>
          <span class="hljs-attr">tsc</span> <span class="hljs-string">--outFile file.js file.ts</span>
          <span class="hljs-attr">tsc</span> <span class="hljs-string">@args.txt</span>

<span class="hljs-attr">Options</span>:<span class="hljs-string"></span>
<span class="hljs-meta">-h,</span> <span class="hljs-string">--help                                         Print this message.</span>
<span class="hljs-meta">--all</span>                                              <span class="hljs-string">Show all compiler options.</span>
<span class="hljs-meta">-v,</span> <span class="hljs-string">--version                                      Print the compiler's version.</span>
<span class="hljs-attr">...</span></code></pre>
<p>如果仅仅是编译少量的文件，我们可以直接使用 <code>tsc</code> ，通过其选项来设置编译配置，如：</p>
<pre class="bash hljs"><code class="bash" style="word-break: break-word; white-space: initial;">tsc --outFile file.js --target es3 --module commonjs file.ts</code></pre>
<p>但如果是编译整个项目的话，最推荐的做法是使用 <code>tsconfig.json</code> 文件，这样就不用每次编译时都还得手动敲配置，而且也便于团队协作。</p>
<p>以下是让 <code>tsc</code> 使用 <code>tsconfig.json</code> 的两种方式：</p>
<ul>
<li>不显式指定 <code>tsconfig.json</code> ，此时，编译器会从当前路径开始寻找 <code>tsconfig.json</code> 文件，如果没有找到，则继续往上级路径逐步寻找，直到找到为止</li>
<li>通过 <code>--project</code> （或缩写 <code>-p</code> ）指定一个包含 <code>tsconfig.json</code> 的路径，或者包含配置信息的 <code>.json</code> 文件路径</li>
</ul>
<p>注意，<code>tsc</code> 的命令行选项具有优先级，会覆盖 <code>tsconfig.json</code> 中的同名选项。</p>
<h2 id="item-2">使用示例</h2>
<p>下面是一个简单的配置示例：</p>
<pre class="json hljs"><code class="json">{
  <span class="hljs-attr">"compilerOptions"</span>: {
    <span class="hljs-attr">"module"</span>: <span class="hljs-string">"commonjs"</span>,
    <span class="hljs-attr">"noImplicitAny"</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-attr">"removeComments"</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-attr">"preserveConstEnums"</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-attr">"sourceMap"</span>: <span class="hljs-literal">true</span>
  },
  <span class="hljs-attr">"files"</span>: [
    <span class="hljs-string">"app.ts"</span>,
    <span class="hljs-string">"foo.ts"</span>,
  ]
}</code></pre>
<p>其中，<code>compilerOptions</code> 用来配置编译选项，<code>files</code> 用来指定待编译文件。<br>这里的待编译文件是指<strong>入口文件</strong>，任何被入口文件依赖的文件，比如 <code>foo.ts</code> 依赖 <code>bar.ts</code> ，那这里并不需要写上 <code>bar.ts</code> ，编译器会自动把所有的依赖文件纳为编译对象。</p>
<p>也可以使用 <code>include</code> 和 <code>exclude</code> 来指定和排除待编译文件：</p>
<pre class="json hljs"><code class="json">{
  <span class="hljs-attr">"compilerOptions"</span>: {
    <span class="hljs-attr">"module"</span>: <span class="hljs-string">"commonjs"</span>,
    <span class="hljs-attr">"noImplicitAny"</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-attr">"removeComments"</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-attr">"preserveConstEnums"</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-attr">"sourceMap"</span>: <span class="hljs-literal">true</span>
  },
  <span class="hljs-attr">"include"</span>: [
    <span class="hljs-string">"src/**/*"</span>
  ],
  <span class="hljs-attr">"exclude"</span>: [
    <span class="hljs-string">"node_modules"</span>,
    <span class="hljs-string">"**/*.spec.ts"</span>
  ]
}</code></pre>
<p>所以，总结一下，指定待编译文件有两种方式：</p>
<ul>
<li>使用 <code>files</code> 属性</li>
<li>使用 <code>include</code> 和 <code>exclude</code> 属性</li>
</ul>
<p>开发者可以按照自己的喜好使用其中<strong>任意一种</strong>。但它们不是互斥的，在某些情况下两者搭配起来使用效果更佳。</p>
<h2 id="item-3">配置说明</h2>
<h3 id="item-3-1">文件指定</h3>
<p><code>files</code> 属性是一个数组，数组元素可以是相对文件路径和绝对文件路径。</p>
<p><code>include</code> 和 <code>exclude</code> 属性也是一个数组，但数组元素是类似 <code>glob</code> 的文件模式。它支持的 <code>glob</code> 通配符包括：</p>
<ul>
<li>
<code>*</code> ：匹配 0 或多个字符（注意：不含路径分隔符）</li>
<li>
<code>?</code> ：匹配任意单个字符（注意：不含路径分隔符）</li>
<li>
<code>**/</code> ：递归匹配任何子路径</li>
</ul>
<p>在继续说明之前，有必要先了解下在编译器眼里什么样的文件才算是 <strong>TS 文件</strong>。<br>TS 文件指拓展名为 <code>.ts</code>、<code>.tsx</code> 或 <code>.d.ts</code> 的文件。如果开启了 <code>allowJs</code> 选项，那 <code>.js</code> 和 <code>.jsx</code> 文件也属于 TS 文件。</p>
<p>如果仅仅包含一个 <code>*</code> 或者 <code>.*</code> ，那么只有<strong>TS 文件</strong>才会被包含。</p>
<p>如果 <code>files</code> 和 <code>include</code> 都未设置，那么除了 <code>exclude</code> 排除的文件，编译器会默认包含路径下的所有 <strong>TS 文件</strong>。</p>
<p>如果同时设置 <code>files</code> 和 <code>include</code> ，那么编译器会把两者指定的文件都引入。</p>
<p>如果未设置 <code>exclude</code> ，那其默认值为 <code>node_modules</code> 、<code>bower_components</code>、<code>jspm_packages</code> 和编译选项 <code>outDir</code> 指定的路径。</p>
<p><code>exclude</code> 只对 <code>include</code> 有效，对 <code>files</code> 无效。即 <code>files</code> 指定的文件如果同时被 <code>exclude</code> 排除，那么该文件仍然会被编译器引入。</p>
<p>前面提到，任何被 <code>files</code> 或 <code>include</code> 引入的文件的依赖会被自动引入。<br>反过来，如果 <code>B.ts</code> 被 <code>A.ts</code> 依赖，那么 <code>B.ts</code> 不能被 <code>exclude</code> 排除，除非 <code>A.ts</code> 也被排除了。 </p>
<p>有一点要注意的是，编译器不会引入疑似为输出的文件。比如，如果引入的文件中包含 <code>index.ts</code> ，那么 <code>index.d.ts</code> 和 <code>index.js</code> 就会被排除。通常来说，只有拓展名不一样的文件命名法是不推荐的。</p>
<p><code>tsconfig.json</code> 也可以为空文件，这种情况下会使用默认的编译选项来编译所有默认引入的文件。</p>
<h3 id="item-3-2">编译选项</h3>
<h4>常用选项</h4>
<table>
<thead><tr>
<th>选项字段</th>
<th>类型</th>
<th>默认值</th>
<th>说明</th>
</tr></thead>
<tbody>
<tr>
<td><code>allowJs</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>允许编译 JS 文件</td>
</tr>
<tr>
<td><code>checkJs</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>报告 JS 文件中存在的类型错误需要配合 <code>allowJs</code> 使用</td>
</tr>
<tr>
<td><code>declaration</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>生成对应的 <code>.d.ts</code> 文件</td>
</tr>
<tr>
<td><code>declarationDir</code></td>
<td><code>string</code></td>
<td><code>-</code></td>
<td>生成的 <code>.d.ts</code> 文件存放路径默认与 <code>.ts</code> 文件相同</td>
</tr>
<tr>
<td><code>experimentalDecorators</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>启用实验功能-ES 装饰器</td>
</tr>
<tr>
<td><code>jsx</code></td>
<td><code>string</code></td>
<td><code>Preserve</code></td>
<td>在 <code>.tsx</code> 中支持 JSX ：<code>React</code> 或 <code>Preserve</code> ，<a href="http://www.typescriptlang.org/docs/handbook/jsx.html" rel="nofollow noreferrer" target="_blank">详细说明</a>
</td>
</tr>
<tr>
<td><code>jsxFactory</code></td>
<td><code>string</code></td>
<td><code>React.createElement</code></td>
<td>
<code>jsx</code> 设置为 <code>React</code> 时使用的创建函数</td>
</tr>
<tr>
<td><code>lib</code></td>
<td><code>string[]</code></td>
<td><code>-</code></td>
<td>编译时引入的 ES 功能库，包括：<code>es5</code> 、<code>es6</code>、<code>es7</code>、<code>dom</code> 等。如果未设置，则默认为： <code>target</code> 为 <code>es5</code> 时: <code>["dom", "es5", "scripthost"]</code>  <code>target</code> 为 <code>es6</code> 时: <code>["dom", "es6", "dom.iterable", "scripthost"]</code>
</td>
</tr>
<tr>
<td><code>module</code></td>
<td><code>string</code></td>
<td>
<code>target === "es3" or "es5" ?</code><code>"commonjs" : "es6"</code>
</td>
<td>生成的模块形式：<code>none</code>、<code>commonjs</code>、<code>amd</code>、<code>system</code>、<code>umd</code>、<code>es6</code>、<code>es2015</code> 或 <code>esnext</code>  只有 <code>amd</code> 和 <code>system</code> 能和 <code>outFile</code> 一起使用 <code>target</code> 为 <code>es5</code> 或更低时可用 <code>es6</code> 和 <code>es2015</code>
</td>
</tr>
<tr>
<td><code>moduleResolution</code></td>
<td><code>string</code></td>
<td>
<code>module === </code><code>"amd" or "system" or "es6" ?</code><code> "classic" : "node"</code>
</td>
<td>模块解析方式，<a href="http://www.typescriptlang.org/docs/handbook/module-resolution.html" rel="nofollow noreferrer" target="_blank">详细说明</a>
</td>
</tr>
<tr>
<td><code>noImplicitAny</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>存在隐式 <code>any</code> 时抛错</td>
</tr>
<tr>
<td><code>noImplicitReturns</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>不存在 <code>return</code> 时抛错</td>
</tr>
<tr>
<td><code>noImplicitThis</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>
<code>this</code> 可能为 <code>any</code> 时抛错</td>
</tr>
<tr>
<td><code>outDir</code></td>
<td><code>string</code></td>
<td><code>-</code></td>
<td>编译生成的文件存放路径默认与 <code>.ts</code> 文件相同</td>
</tr>
<tr>
<td><code>sourceMap</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>生成 <code>.map</code> 文件</td>
</tr>
<tr>
<td><code>target</code></td>
<td><code>string</code></td>
<td><code>es3</code></td>
<td>生成 <code>.js</code> 文件版本</td>
</tr>
</tbody>
</table>
<blockquote>附：<a href="http://www.typescriptlang.org/docs/handbook/compiler-options.html" rel="nofollow noreferrer" target="_blank">官方完整的编译选项列表</a>
</blockquote>
<h4>类型相关</h4>
<p>类型相关的选项包括 <code>typeRoots</code> 和 <code>types</code> 。</p>
<p>有一个普遍的误解，以为这两个选项适用于所有的类型声明文件，包括用户自定义的声明文件。其实不然。<br>这两个选项只对通过 npm 安装的<strong>声明模块</strong>有效，<a href="https://stackoverflow.com/questions/40222162/typescript-2-custom-typings-for-untyped-npm-module" rel="nofollow noreferrer" target="_blank">用户自定义的类型声明文件与它们没有任何关系</a>。</p>
<p>声明模块通常会包含一个 <code>index.d.ts</code> 文件，或者其 <code>package.json</code> 设置了 <code>types</code> 字段。</p>
<p>默认的，所有位于 <code>node_modules/@types</code> 路径下的模块都会引入到编译器。<br>具体来说是，<code>./node_modules/@types</code> 、<code>../node_modules/@types</code>、<code>../../node_modules/@types</code> 等等。</p>
<p><code>typeRoots</code> 用来指定默认的类型声明文件查找路径，默认为 <code>node_modules/@types</code> 。比如:</p>
<pre class="json hljs"><code class="json">{
  <span class="hljs-attr">"compilerOptions"</span>: {
    <span class="hljs-attr">"typeRoots"</span>: [<span class="hljs-string">"./typings"</span>]
  }
}</code></pre>
<p>上面的配置会自动引入 <code>./typings</code> 下的<strong>所有</strong> TS 类型声明模块，而不是 <code>./node_modules/@types</code> 下的模块。</p>
<p>如果不希望自动引入 <code>typeRoots</code> 指定路径下的所有声明模块，那可以使用 <code>types</code> 指定自动引入哪些模块。比如：</p>
<pre class="json hljs"><code class="json">{
  <span class="hljs-attr">"compilerOptions"</span>: {
    <span class="hljs-attr">"types"</span> : [<span class="hljs-string">"node"</span>, <span class="hljs-string">"lodash"</span>, <span class="hljs-string">"express"</span>]
  }
}</code></pre>
<p>只会引入 <code>node</code> 、 <code>lodash</code> 和 <code>express</code> 三个声明模块，其它的声明模块则不会被自动引入。<br>如果 <code>types</code> 被设置为 <code>[]</code> ，那么将不会自动引入任何声明模块。此时，如果想使用声明模块，只能在代码中手动引入了。</p>
<p>请记住，自动引入只对<strong>包含全局声明</strong>的模块有效。比如 <code>jQuery</code> ，我们不用手动 <code>import</code> 或者 <code>///&lt;reference/&gt;</code> 即可在任何文件中使用 <code>$</code> 的类型。再比如，对于 <code>import 'foo'</code> ，编译器会分别在 <code>node_modules</code> 和 <code>node_modules/@types</code> 文件下查找 <code>foo</code> 模块和声明模块。</p>
<p>基于此，如果想让自定义声明的类型不需要手动引入就可以在任何地方使用，可以将其声明为全局声明 <code>global</code> ，然后让 <code>files</code> 或者 <code>include</code> 包含即可。<br>比如：</p>
<pre class="typescript hljs"><code class="ts"><span class="hljs-keyword">declare</span> global {
  <span class="hljs-keyword">const</span> graphql: <span class="hljs-function">(<span class="hljs-params">query: TemplateStringsArray</span>) =&gt;</span> <span class="hljs-built_in">void</span>;
  <span class="hljs-keyword">namespace</span> Gatsby {
    <span class="hljs-keyword">interface</span> ComponentProps {
      children: <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> React.ReactNode,
      data: RootQueryType
    }
  }
}</code></pre>
<p>这样的话，就可以在任何地方直接使用 <code>graphql</code> 和 <code>Gatsby</code> 对应的类型了。</p>
<h4>配置复用</h4>
<p>可以使用 <code>extends</code> 来实现配置复用，即一个配置文件可以继承另一个文件的配置属性。</p>
<p>比如，建立一个基础的配置文件 <code>configs/base.json</code> ：</p>
<pre class="json hljs"><code class="json">{
  <span class="hljs-attr">"compilerOptions"</span>: {
    <span class="hljs-attr">"noImplicitAny"</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-attr">"strictNullChecks"</span>: <span class="hljs-literal">true</span>
  }
}</code></pre>
<p>然后，<code>tsconfig.json</code> 就可以引用这个文件的配置了：</p>
<pre class="json hljs"><code class="json">{
  <span class="hljs-attr">"extends"</span>: <span class="hljs-string">"./configs/base"</span>,
  <span class="hljs-attr">"files"</span>: [
    <span class="hljs-string">"main.ts"</span>,
    <span class="hljs-string">"supplemental.ts"</span>
  ]
}</code></pre>
<p>这种继承有两种特点：</p>
<ul>
<li>继承者中的同名配置会覆盖被继承者</li>
<li>所有相对路径都被解析为其所在文件的路径</li>
</ul>
  