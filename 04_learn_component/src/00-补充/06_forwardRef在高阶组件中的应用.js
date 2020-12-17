import React, { Component, createRef, forwardRef } from 'react'


class FancyButton extends Component {
  render() {
    return <button {...this.props}>{this.props.children}</button>
  }
}


function logProps(WrappedComponent) {
  class LogProps extends React.Component {
    constructor(props) {
      super(props);
      console.log("LogProps constructor")
    }
    componentDidUpdate(prevProps) {
      console.log('old props:', prevProps);
      console.log('new props:', this.props);
    }


    render() {
      console.log("*************")
      return <WrappedComponent {...this.props} />;
    }
  }

  return LogProps;
}


export default class App extends Component {
  constructor(props) {
    super(props);
    this.myRef = createRef();
    this.state = {
      name: 'lis',
      age: 33
    }
  }

  btnClick(e) {
    this.setState({
      name: 'kboe'
    })
  }

  render() {
    const Com = logProps(FancyButton);

    return (
      <div>
        <Com
          name={this.state.name}
          age={this.state.age}
          onClick={e => { this.btnClick(e) }}>点击</Com>
      </div>
    )
  }

}
