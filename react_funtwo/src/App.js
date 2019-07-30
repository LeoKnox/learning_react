import React, {Component} from 'react'
import './App.css'
import Menu from './Menu'
import Home from './Home'
import Second from './Second'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: <Home />
    }
  }

  render() {
    return (
      <div id="app">
        <Menu />
        {this.state.currentPage}
      </div>
    )
  }
}

export default App