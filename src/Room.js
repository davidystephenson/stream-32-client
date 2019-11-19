import React from 'react'
import { connect } from 'react-redux'
import superagent from 'superagent'

class Room extends React.Component {
  onClick = async () => {
    const { jwt, match } = this.props
    const { name } = match.params

    const url = `http://localhost:4000/join/${name}`

    const response = await superagent
      .put(url)
      .set({
        authorization: `Bearer ${jwt}`
      })

    console.log('response test:', response)
  }

  render () {
    const { name } = this.props.match.params

    const { rooms } = this.props

    // const { rooms, match } = this.prop
    // const { name } = match.params

    console.log('rooms test:', rooms)

    const room = rooms
      .find(room => room.name === name)

    if (!room) {
      return 'This room does not exist'
    }

    const { users } = room

    const list = users && users.length
      ? users.map(user =>
        <p key={user.name}>
          {user.name}
        </p>
      )
      : <p>This room has no users</p>

    console.log('list test:', list)

    return <div>
      <h1>{name}</h1>

      <button onClick={this.onClick}>
        Join
      </button>

      {list}
    </div>
  }
}

function mapStateToProps (state) {
  return {
    jwt: state.jwt,
    rooms: state
  }
}

export default connect(mapStateToProps)(Room)
