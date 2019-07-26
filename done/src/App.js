import React from 'react'
import './App.css'
import Main from './Main'
import Side from './Side'
import imdata from './DataOne'

class App extends React.Component {
  changeData = (e) => {
    console.log('net tiki')
  }

  changes = (e) => {
    console.log(e)
  }

  render() {
    imdata.name = 'jo'
    return (
      <div>
        <Side onClick={this.changeData} />
        <Main {...imdata} />
      </div>
    )
  }
}

export default App