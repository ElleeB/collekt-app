export default function authReducer( state = {
  user: [] },
  action ) {

  switch (action.type) {

    case 'REGISTRATION':
      return {...state, user: action.payload}

    case 'LOGIN':
      return {...state, user: action.payload}
      
      default:
        return state;
  }
}
