import React from 'react'
import './App.css'
import Main from './Main'
import Side from './Side'
import imdata from './DataOne'

this.setState((imdata) = ({
  dataName: imdata.name
}))

class App extends React.Component {
  changeData = (e) => {
    e.preventDefault()
    imdata.name = "tiki kitten"
    console.log(dataName)
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