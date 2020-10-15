State 是私有的，完全受控于当前组件

组件的state只能在contructor构造函数中初始化，并且在constructor中只能赋值初始化不能使用setState

修改state的值只能通过`setState`函数，如果直接给state的属性赋值无效，并且报一个警告

```js
this.state.counter += 1;//  Do not mutate state directly. Use setState()  react/no-direct-mutation-state
```

state中的数据都是参数React数据流的，都是响应式的，不重写 `shouldCompoentUpdate`函数时state中的值变化了都是重新渲染页面的。

`shouldComponentUpdate`默认返回true，只要props和state中的值变化了都会触发页面从新渲染

`setState`方法可以是**异步**的也可以是**同步**的

在react的合成事件和生命周期中是异步的。

```javascript
import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      message: 'hello react'
    }
  }

  changeText() {
    this.setState({
      message: "你好啊，李银河"
    });
    console.log(this.state.message);// hello react
  }

  render() {
    console.log("render ....");
    return (
      <div>
      	<h2>{this.state.message}</h2>
        <button onClick={e => this.changeText()}>改变文本</button>
      </div >
    )
  }
}
```



在`window.setInterval`、`setTimeout`和原生事件中（如：document.addEventLisenter('',()=>{})）是同步的

```js
import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Hello World!',
      counter: 0
    }
  }
  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={e => this.changeText(e)}>改变文本</button>

        <button id="btn">改变文本2</button>
        <button onClick={e => this.changeText3(e)}>累加+1</button>
      </div>
    )
  }

  componentDidMount() {
    document.getElementById("btn").addEventListener("click", (e) => {
      this.setState({
        message: "你好啊，李银河 sync"
      });
      console.log("原生事件中修改state的值，", this.state.message);
    })
  }

  changeText(e) {
    setTimeout(() => {
      this.setState({
        message: "你好啊，李银河 async"
      });
      console.log("同步更新state的值，setTimeout ", this.state.message);
    }, 1000);
  }

  changeText3(e) {
    window.setInterval(() => {
      this.setState({
        counter: this.state.counter + 1
      });
      console.log("同步更新state的值，setInterval ", this.state.counter);
    }, 1000);
  }
}

```

setState异步时，可以将setState视为请求而不是立即更新组件的命令，这些请求会拍入队列，从性能考虑批量更新组件效率会更高。因此调用setState之后立即获取更改后的值会存在问题。

异步情况下无法直接获取修改后的值，但是有两种方式获取修改过后的值

* 在`componentDidUpdate`中获取修改后的值

* 在`setState({},()=>{})`的回调函数中获取

```javascript
import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    }
  }

  increment = () => {
    // this.state.counter += 1;
    this.setState({
      counter: this.state.counter + 1
    })
  }
  render() {
    return (
      <div>
        <h2>计数器：{this.state.counter}</h2>
        <button onClick={this.increment}>+1</button>
      </div>
    )
  }
}
```



setState传入的是一个对象的时候实际上调用的是Object.assign()方法，React的源码

```js

```



当多次调用setState的时候

```js
increment = () => {
  this.setState({
    counter: this.state.counter + 1
  });
  this.setState({
    counter: this.state.counter + 1
  });
  this.setState({
    counter: this.state.counter + 1
  });
  this.setState({
    counter: this.state.counter + 1
  });
}
```

相当于

```js
const state = { counter: 1 };
const newState = Object.assign(
  state,
  { counter: state.counter + 1 },
  { counter: state.counter + 1 },
  { counter: state.counter + 1 },
  { counter: state.counter + 1 },
  { counter: state.counter + 1 },
  { counter: state.counter + 1 }
);
console.log(state); // {counter: 2}
console.log(newState); // {counter: 2}
```

后调用的 `setState()` 将覆盖同一周期内先调用 `setState` 的值，因此商品数仅增加一次



如果本次更新依赖于上一次的更新setState(updater, callback?)需要传入一个函数updater

```js
this.setState((preState, props) => {
  return {
    	counter: preState.counter + 1
  };
});
```

Updater函数

```js
(state, props) => stateChange
```

Updater函数中接受的`state`和`props`都是最新的值，都是组件中`state`和`props`的引用，返回值会与`state`进行浅层合并

