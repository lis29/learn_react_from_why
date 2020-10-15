import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <SuperContainer />
    )
  }
}


class SuperContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a: false
    }
  }
  render() {
    return (
      <div>
        <div>super containter a is {this.state.a ? " true" : " false"}</div>
        <Container setParentState={this.setState.bind(this)} varA={this.state.a} />
      </div>

    )
  }
}

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      b: false
    }
  }
  render() {
    return (
      <div>
        <div>
          containter
          <h3>b is {this.state.b ? " true" : " false"} varA is {this.props.varA ? "true" : "false"}</h3>
        </div>
        <button onClick={e => this.handleClicked()}>按钮</button>
      </div>
    )
  }

  handleClicked() {
    console.log('*********')
    this.props.setParentState({
      a: true
    });
    this.setState({
      b: true
    })
  }
}
