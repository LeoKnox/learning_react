import React, {Component} from 'react'
import './App.css'
import Menu from './Menu'
import Home from './Home'
import Second from './Second'

class App extends Component {
  render() {
    return (
      <div id="app">
        <Menu />
        <Home />
        <Second />
      </div>
    )
  }
}

export default App