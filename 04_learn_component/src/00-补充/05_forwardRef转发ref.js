import React, { Component, createRef, forwardRef } from 'react'




export default class App extends Component {

  constructor(props) {
    super(props);
    this.btnRef = createRef();
  }


  render() {
    // forwardRef把Ref传递给子元素（子组件）
    const FancyButton = forwardRef((props, ref) => {
      return (
        <button ref={ref} {...props} className="FancyButton">
          {props.children}
        </button>
      )
    });

    return (
      <div>
        <FancyButton ref={this.btnRef} onClick={e => console.log(this.btnRef.current)}>Clicked Me</FancyButton>
      </div>
    )
  }
}
