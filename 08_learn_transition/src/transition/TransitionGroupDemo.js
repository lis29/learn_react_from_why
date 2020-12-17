import React, { PureComponent } from 'react'
import './TransitionGroup.css'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default class TransitionGroupDemo extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      names: ['nba', 'cba', 'abc', 'kobe']
    }
  }
  render() {
    return (
      <div>
        <TransitionGroup>
          {
            this.state.names.map((item, index) => {
              return (
                <CSSTransition
                  key={item}
                  timeout={500}
                  classNames="item">
                  <div>
                    {item}
                    <button onClick={e => this.remove(index)}>-</button>
                  </div>
                </CSSTransition>
              )
            })
          }
        </TransitionGroup>
        <hr />
        <button onClick={e => this.increment()}>+name</button>
      </div>
    )
  }

  increment() {
    const { names } = this.state;
    this.setState({
      names: [...names, 'lis29']
    });
  }

  remove(index) {
    this.setState({
      names: this.state.names.filter((item, indey) => {
        return index !== indey
      })
    });
  }

}
