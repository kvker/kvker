---
layout: note
title: 字符show，ES6模板字符串与标签化模板
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

# ES6字符串骚包点

1. 模板字符串

2. 标签化模板

模板字符串带过，主要解释标签化模板。

---

## 模板字符串

这个大家应该都用过，或许这个名字你不熟悉吧，如下：

```
let str = `
<div>
    <button>打我啊，笨蛋</button>
</div>
`

/** "
 * <div>
 *     <button>打我啊，笨蛋</button>
 * </div>
 * "
 */
```

功能就是可以自助换行，方便布局。

哦，对，还有更好用的插入变量（替换位），如下：

```
let title = '打我啊，笨蛋'
let str = `
<div>
    <button>${title}</button>
</div>
`
/** "
 * <div>
 *     <button>打我啊，笨蛋</button>
 * </div>
 * "
 */
```

没错，你可以有多个替换位，这里不做演示。

我们主要说一说标签化模板。

---

## 标签化模板

上伪代码

```
let str = html`a${b}c` // Polymer里面一段代码形式
```

字符串模板好理解，可是前面那个html是什么鬼？当然，结合上下文还是可以猜出是个函数。

> 标签化模板：特殊的函数形式，参数为模板字符串根据替换位切割的各个部分，第一个参数是切割后的字符串数组，后续参数为各个替换位内容。

文本解释说不清楚，直接上代码分析：

```
function tag(param1, ...param2) {
    console.log(param1)
    console.log(param2)
    return '' // 返回结果
}

str = tag`a${`b`}c${`d`}` // ["a", "c", ""]， ["b", "d"]
```

首先，模板字符串是可以嵌套模板字符串的，因为本身就是表达式。

然后，如上所述，第一个参数param1是一个数组，接的是切割后的内容，如果替换位在首位或末位，都会切除一个空字符，如例子中的`["a", "c", ""]`。

接着，param2应该是多个参数，不是数组，但是由于ES6提供了展开运算符，所以可以这样三点来处理，实际上可以写成如下这种，但是就没有了拓展性：

```
// 这种只能解决较为单一的业务
function tag(param1, param2, param3) {
    return '' // 返回结果
}
```

当然了，你也可以使用arguments来处理，但是还是老老实实用三个点的展开吧，多帅气不是？

最后，建议写法当然是展开运算符，里面使用遍历来获取所有参数，如下方式：

```
function tag(param1, ...param2) {
    let result = ''
    // param2一定比param1短一个，所以比较安全，不会越界
    for(let i = 0, j = param2.length; i < j; i++) {
        result += param1[i]
        result += param2[i]
    }
    result += param1.pop()

    return result
}
```

这个是模拟返回原数组的形式。

注意遍历的是param2，不是param1，否则一不小心就给越界了。

---

具体的用处可以参考Polymer写模板的方式，比如你传入的是html标签那种类似的模板字符串，那么某个解析函数就可以根据`<>`来将参数等匹配处理了。

**ok，文章结束，有不懂或者需要讨论的，欢迎留言。**
  