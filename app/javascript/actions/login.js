export function login() {
  return async dispatch => {
    dispatch({ type: 'LOGGING_IN' })
    const response = await login('sessions/create');
    const user = await response.json();
    dispatch({ type: 'LOGIN', payload: user })
  };
}
