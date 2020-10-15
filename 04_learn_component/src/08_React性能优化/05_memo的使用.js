import React, { Component, PureComponent, memo } from 'react'

const MemoHeader = memo(function Header() {
  console.log("Header被调用");
  return (
    <h1>我是头部组件</h1>
  )
})


const MemoProductList = memo(function ProductList() {
  console.log("ProductList被调用");
  return (
    <ul>
      <li>商品列表1</li>
      <li>商品列表2</li>
      <li>商品列表3</li>
      <li>商品列表4</li>
      <li>商品列表5</li>
    </ul>
  )
})

class MemoMain extends PureComponent {
  render() {
    console.log("Main被调用");
    return (
      <div>
        <MemoProductList />
      </div>
    )
  }
}

const MemoFooter = memo(function Footer() {
  console.log("Footer被调用");
  return (
    <h1>我是底部组件</h1>
  )
})


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }
  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
  }
  render() {
    console.log("App render函数被调用");
    return (
      <div>
        <h2>当前计数:{this.state.counter}</h2>
        <button onClick={e => this.increment()}>+1</button>
        <MemoHeader />
        <MemoMain />
        <MemoFooter />
      </div>
    )
  }
}
