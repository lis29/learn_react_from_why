import React, { Component } from 'react'
import { createRef } from 'react';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.textInput = null;
    this.setTextInputRef = (element) => {
      this.textInput = element;
    }
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    if (this.textInput) this.textInput.focus();
  }

  componentDidMount() {
    this.focusTextInput();
  }

  render() {
    return (
      <div>
        <input
          type="text"
          ref={this.setTextInputRef}
        />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    )
  }
}
