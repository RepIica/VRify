const urlBase = `http://localhost:3001/api/v1`

const loginUser = (email, password) => {
  return fetch(`http://localhost:3001/api/v1/auth`, {
    headers: {
      'Content-Type': 'application/json',
      Accepts: 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      email: email,
      password: password
    })
  }).then(res => res.json())
}

const getCurrentUser = (token) => {
  return fetch(`${urlBase}/current_user`, {
    headers: {
      'Content-Type': 'application/json',
      Accepts: 'application/json',
      Authorization: token
    }
  }).then(res => res.json())
}



export {
  loginUser,
  getCurrentUser,
}
