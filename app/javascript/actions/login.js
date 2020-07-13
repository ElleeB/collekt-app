import axios from 'axios';

export const login = credentials => {
  const { email, password } = credentials
  console.log (email)
  return dispatch => {
    axios
    .post("http://localhost:3001/login", {
      user: {
          email: email,
          password: password
        }
      },
      { withCredentials: true }
    )
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error)
    })
  }
};

const loginSuccess = user => ({
  type: LOGIN_SUCCESS,
  payload: {
    user
  }
});
