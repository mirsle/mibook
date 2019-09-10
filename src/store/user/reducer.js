import actionTypes from './actionTypes'

const defaultState = {
  username: ''
}

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.USER_NAME: {
      let newState = JSON.parse(JSON.stringify(state))
      newState.username = action.username
      return newState
    }
    default: 
      return state
  }
}

export default reducer