import React, { PureComponent } from 'react'

class App extends PureComponent {
  render() {
    return (
      <div>
        App: {this.props.name}
      </div>
    )
  }
}

function enhanceComponent(WrappedComponent) {
  class NewCompoent extends PureComponent {
    render() {
      return <WrappedComponent {...this.props} ></WrappedComponent>
    }
  };
  NewCompoent.displayName = "Kobe";
  return NewCompoent;
}

function enhanceComponent2(WrappedComponent) {
  function NewComponent(props) {
    return <WrappedComponent {...props} />
  }

  NewComponent.displayName = 'Lebron';
  return NewComponent;
}

const EnhanceComponent = enhanceComponent2(App);
export default EnhanceComponent;

