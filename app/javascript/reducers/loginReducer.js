export default function loginReducer( state = { user: [] }, action ) {
  switch (action.type) {

    case 'LOGIN':
      return {...state, user: action.payload}

      default:
        return state;
  }
}
