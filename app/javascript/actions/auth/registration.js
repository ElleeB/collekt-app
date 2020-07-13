export function registration() {
  return async dispatch => {
    dispatch({ type: 'REGISTERING' })
    const response = await registration('registrations/create');
    const user = await response.json();
    dispatch({ type: 'REGISTRATION', payload: user })
  };
}
