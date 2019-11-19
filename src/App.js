/* global EventSource */

import React from 'react'
import { connect } from 'react-redux'

class App extends React.Component {
  stream = new EventSource(
    'http://localhost:4000/stream'
  )

  componentDidMount () {
    this.stream.onmessage = (event) => {
      const { data } = event

      const parsed = JSON.parse(data)

      this.props.dispatch({
        type: 'ROOMS',
        payload: parsed
      })

      console.log('parsed test:', parsed)
    }
  }

  render () {
    return <div>Hello world</div>
  }
}

export default connect()(App)
