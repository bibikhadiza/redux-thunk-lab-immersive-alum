function catsReducer(state = {loading: false, pictures: []}, action) {
  switch (action.type) {
    case 'FETCH_CATS':
    case 'FETCH_CATS':
     let newState = Object.assign({}, state, {loading: false, pictures: action.payload})
     return newState
    default:
      return state;
  }
}

export default catsReducer
