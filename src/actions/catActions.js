function fetchCats(){
  return (dispatch) => {
    dispatch({type: "LOADING_CATS"})
    return fetch('http://localhost:4000/db')
      .then(res => res.json())
      .then(payload => dispatch({type: "FETCH_CATS", payload}))
  }
}

const actions = {
  fetchCats
}

export default actions
