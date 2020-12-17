import React, { Component, createRef } from 'react'
import { createElement } from 'react';

class CustomTextInput extends Component {
  constructor(props) {
    super(props)
    this.inputRef = createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    this.inputRef.current.focus();
  }

  render() {
    return <input type="text" ref={this.inputRef} />
  }
}


export default class App extends Component {
  constructor(props) {
    super(props);
    this.textInputRef = createRef();
  }

  componentDidMount() {
    this.textInputRef.current.focusTextInput();
  }
  render() {
    return (
      <div>
        <CustomTextInput ref={this.textInputRef} />
      </div>
    )
  }
}
