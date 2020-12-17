import React, { Component, createRef } from 'react'


function MyFunCompoent() {
  return <input />
}
export default class App extends Component {
  constructor(props) {
    super(props);
    this.textInput = createRef();
  }

  render() {
    return (
      <div>
        <MyFunCompoent ref={this.textInput} />
        {/* 获取到的结果是null ， 如果要在函数组件中使用 ref，你可以使用 forwardRef*/}
        <button onClick={e => console.log(this.textInput)}>获取ref关联的组件</button>
      </div>
    )
  }
}
