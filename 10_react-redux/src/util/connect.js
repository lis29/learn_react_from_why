// 把组件的中的state和方法映射过来
import { PureComponent } from "react";
import { storeContext as StoreContext } from './context'

function connect(stateMapToProps, dispatchMapToProps) {
  return function (WrappedComponent) {
    return class EhanceComponent extends PureComponent {
      static contextType = StoreContext
      constructor(props, context) {
        super(props, context)
        this.state = { ...stateMapToProps(context.store) }
        console.log("EhanceComponent constructor ", this.context);
      }

      componentDidMount() {
        console.log("EhanceComponent componentDidMount ", this.context);
        this.subscribe = this.context.store.subscribe(() => {
          this.setState({
            ...stateMapToProps(this.context.store)
          })
        })
      }

      componentWillUnmount() {
        this.subscribe()
      }

      render() {
        return <WrappedComponent
          {...stateMapToProps(this.context.store)}
          {...dispatchMapToProps(this.context.store)} />
      }
    }
  }
}

export default connect;