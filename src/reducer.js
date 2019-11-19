
export default function reducer (
  state = [], action = {}
) {
  switch (action.type) {
    case 'ROOMS':
      return action.payload
    default:
      return state
  }
}
