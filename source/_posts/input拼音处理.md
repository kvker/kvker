---
layout: note
title: input拼音处理
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
import React, {Component} from 'react'

export default class ShowZoneSearch extends Component {
constructor() {
super()
this.state = {
remind: "",
length: 0,
inputValue: ""
}
}

change() {
let reg = /^[A-Za-z0-9]*$/
if(this.inputLock || !reg.test(this.refs.showzonesearchinput.value)) return

this.refs.showzonesearchinput.value = this.refs.showzonesearchinput.value.toLocaleUpperCase()
let _value = this.refs.showzonesearchinput.value.toLocaleUpperCase()
let _length = _value.length
let _search = this.search.bind(this)
let _remind
if (_length == 1 || _length == 2 || _length == 3 || _length == 4 || _length == 9 || _length == 10 ) _search()
else if(_length < 0) _remind = ""
else if(_length > 17) {
//	_remind = "已满17位车架号"
setTimeout(() => {
this.refs.showzonesearchinput.value = _value.substr(0, 17)
}, 20)
}

this.setState({
remind: _remind,
length: _length > 17 ? 17 : _length,
inputValue: _value
})
}

search() {
let _vin = this.refs.showzonesearchinput.value
let _url = "/parse/vins"
let _obj = {
vin: _vin
}
getAjax(_url, _obj, response => {
//	console.log(response)
this.setState({
remind: response.data
})
})
}

render() {
let _remind = this.state.remind
let _length = this.state.length
let _change = this.change.bind(this)
let _search = this.search.bind(this)
let _login = this.props.login
let _inputValue = this.state.inputValue
return (
<div className="ShowZoneSearchContainer">
<div className="ShowZoneSearchRemind">{_remind}</div>
<input ref="showzonesearchinput" className="ShowZoneSearchInput" placeholder="输入17位VIN车架号" onChange={_change} value={_inputValue}
onCompositionStart={() => {
this.inputLock = true
setTimeout(() => this.inputLock = false, 50)
}}/>
<button className="ShowZoneSearchButton" onClick={() => {_login(this.refs.showzonesearchinput.value)}}>查询</button>
<div className="ShowZoneSearchLength">{_length == 0 ? "" : _length}</div>
</div>
)
}
}
```
  