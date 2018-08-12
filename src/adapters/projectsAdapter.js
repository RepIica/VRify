const urlBase = `http://localhost:3001/api/v1`

const getProjects = () => {
  return fetch(`${urlBase}/projects`).then(resp => resp.json())
}

export {
  getProjects,
}
