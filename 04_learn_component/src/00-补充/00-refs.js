import React, { PureComponent, createRef } from 'react'

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.myRef = createRef();// 创建ref
  }
  render() {
    return (
      <div>
        {/* 把myRef附加到DOM节点上 */}
        <div ref={this.myRef}>
          App
        </div>
        {/* 通过current属性查看对应的节点 */}
        <button onClick={e => console.log(this.myRef.current)}>查看Ref</button>
      </div>
    )
  }
}
