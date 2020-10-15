import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: ["星际穿越", "盗梦空间"]
    }
  }

  addMovie() {
    this.setState((preState, props) => {
      return {
        // movies: [...preState.movies, "大话西游"]
        movies: ["大话西游", ...preState.movies]
      }
    })
  }

  render() {
    const { movies } = this.state;
    return (
      <div>
        <h2>电影列表</h2>
        <button onClick={e => this.addMovie()}>添加电影</button>
        <ul>
          {
            movies.map((item, index) => {
              return (
                <li key={item}>{item}</li>
              )
            })
          }
        </ul>

      </div>
    )
  }
}
