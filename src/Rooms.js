import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Rooms extends React.Component {
  render () {
    const { rooms } = this.props

    if (!rooms) {
      return null
    }

    const list = rooms.map(room =>
      <p key={room.name}>
        <Link
          to={`/room/${room.name}`}
        >
          {room.name}
        </Link>
      </p>
    )

    return <main>
      {list}
    </main>
  }
}

function mapStateToProps (state) {
  console.log('state test:', state)
  return {
    rooms: state
  }
}

export default connect(
  mapStateToProps
)(Rooms)
