const initialState = {
  one: 0,
  two: 0,
  three: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'VOTE_ONE':
      console.log("Your choice is Thor!")
      return Object.assign({}, state, {
        one: state.one + 1
      })
    case 'VOTE_TWO':
      console.log("Your choice is Captain America!")
      return Object.assign({}, state, {
        two: state.two + 1
      })
    case 'VOTE_THREE':
      console.log("Your choice is Black Panther")
      return Object.assign({}, state, {
        three: state.three + 1
      })
    default:
      return state
  }
}