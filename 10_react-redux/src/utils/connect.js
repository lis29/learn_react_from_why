import React, { PureComponent } from 'react'
import store from '../store'

const connect = function (mapPropsFn, mapDispatchFn) {
  const enchanceHOC = function (WrappedComponent) {
    class EnchanceComponent extends PureComponent {
      constructor(props) {
        super(props);
        this.state = {
          storeState: store.getState()
        }
      }
      componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
          this.setState({
            storeState: { ...store.getState() }
          });
        });
      }

      componentWillUnmount() {
        this.unsubscribe();
      }

      render() {
        return <WrappedComponent {...mapPropsFn(this.state.storeState)} {...mapDispatchFn(store.dispatch)} />
      }
    }

    return EnchanceComponent;
  }

  return enchanceHOC
}

export default connect;