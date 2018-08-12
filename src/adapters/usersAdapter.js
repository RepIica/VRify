const urlBase = `http://localhost:3001/api/v1`

const createUser = (user) => {
  return fetch(`${urlBase}/users`, {
    headers: {
      'Content-Type': 'application/json',
      Accepts: 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({
      name: user.name,
      email: user.email,
      password: user.password
    })
  }).then(res => res.json())
}

const getUsers = () => {
  return fetch(`${urlBase}/users`)
    .then(r => r.json())
}

export {
  createUser,
  getUsers,
}
