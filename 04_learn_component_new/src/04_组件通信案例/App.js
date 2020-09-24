import React, { Component } from 'react'
import TabControl from './TabControl'
import './style.css'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      currentTitle: '流行'
    }
  }
  itemClicked = (title) => {
    this.setState({
      currentTitle: title
    })
  }
  render() {
    return (
      <div>
        <TabControl itemClicked={this.itemClicked} />
        <div style={{ marginTop: '40px', textAlign: 'center' }}>
          <h4>{this.state.currentTitle}</h4>
        </div>
      </div>
    )
  }
}
