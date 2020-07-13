import axios from 'axios';

export const login = credentials => {
  const { email, password } = credentials
  const user = {
    user: {
      email: email,
      password: password
    }
  };

  return (
    // dispatch(loginStarted());
    axios
    .post("http://localhost:3001/login", user, { withCredentials: true })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error.message)
      dispatch(loginFailure(error.message));
    })
  )
};

const loginStarted = () => ({
  type: 'LOGIN_STARTED'
});

const loginSuccess = user => ({
  type: 'LOGIN_SUCCESS',
  payload: {
    user
  }
});

const loginFailure = () => ({
  type: 'LOGIN_FAILURE',
  payload: {
    error
  }
});
