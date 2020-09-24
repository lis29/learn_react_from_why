import React, { Component } from 'react'

export default class TabControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    }
    this.titles = ['流行','热销','爆款'];
  }

  tabItemClicked = (index) => {
    this.setState({
      currentIndex: index
    })
    this.props.itemClicked(this.titles[index]);
  }

  render() {
    const {currentIndex} = this.state;
    return (
      <div className="tab-control">
        {
            this.titles.map((item,index) => {
              return (
                  <div className="tab-item" key={index} onClick={e => this.tabItemClicked(index)}>
                    <span className={currentIndex === index ? "active" : ""}>{item}</span>
                  </div>
                )
            })
          }
      </div>
    )
  }
}
