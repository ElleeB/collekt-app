const initialState = {
  loading: false,
  user: [],
  error: null
};

export default function authReducer(state = initialState, action) {

  switch (action.type) {

    case 'REGISTRATION':
      return {...state, user: action.payload}

    case 'LOGIN_STARTED':
      return {...state, loading: true}

    case 'LOGIN_SUCCESS':
      return {...state, loading: false, error: null, user: action.payload}

    case 'LOGIN_FAILURE':
      return {...state, loading: false, error: action.payload.error}

      default:
        return state;
  }
}
