/* global EventSource */

import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import Rooms from './Rooms'

class App extends React.Component {
  stream = new EventSource(
    'http://localhost:4000/stream'
  )

  componentDidMount () {
    this.stream.onmessage = (event) => {
      const { data } = event

      const parsed = JSON.parse(data)

      this.props.dispatch(parsed)

      console.log('parsed test:', parsed)
    }
  }

  render () {
    return <div>
      <Route
        path='/'
        exact
        component={Rooms}
      />
    </div>
  }
}

export default connect()(App)
