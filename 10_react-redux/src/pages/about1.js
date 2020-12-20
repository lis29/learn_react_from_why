import React, { PureComponent } from 'react'
// import store from '../store'
import { increment, decrement } from '../store/actionCreateor'
import connect from '../util/connect'
// import { storeContext as StoreContext } from '../util/context'

class About extends PureComponent {
  // constructor(props) {
  //   super(props)
  // }

  // componentDidMount() {
  // this.subscribe = store.subscribe(() => {
  //   this.setState({
  //     counter: store.getState().counter
  //   })
  // })
  // }

  // componentWillUnmount() {
  // this.subscribe();
  // }

  render() {
    return (
      <div>
        <h2>About</h2>
        <h3>{this.props.counter}</h3>
        <button onClick={e => this.props.increment(1)}>+1</button>
        <button onClick={e => this.props.increment(3)}>+3</button>
        <button onClick={e => this.props.decrement(5)}>-5</button>
      </div>
    )
  }
}

function mapStateToProps(store) {
  const obj = {
    counter: store.getState().counter
  }
  return obj;
}

function mapDispatchToProps(store) {
  return {
    increment: function (num) {
      store.dispatch(increment(num))
    },
    decrement: function (num) {
      store.dispatch(decrement(num))
    }
  }
}


// const EhanceAbout = connect(mapStateToProps, mapDispatchToProps)(About)
// EhanceAbout.contextType = StoreContext
// export default EhanceAbout
export default connect(mapStateToProps, mapDispatchToProps)(About)