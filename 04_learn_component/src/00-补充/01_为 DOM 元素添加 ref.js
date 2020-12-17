import React, { PureComponent, createRef } from 'react'

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.textInputRef = createRef();// 创建ref
  }

  focusTextInput() {
    console.log(this.textInputRef.current)
    // 通过current获取ref指向的节点
    // 直接调用节点的原生方法
    this.textInputRef.current.focus();
  }

  render() {
    // 关联ref
    return (
      <div>
        <input type="text" ref={this.textInputRef} />
        <input type="button" value="获取焦点" onClick={e => this.focusTextInput()} />
      </div>
    )
  }
}
