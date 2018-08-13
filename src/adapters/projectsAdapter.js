const urlBase = `http://localhost:3001/api/v1`

const postProj = (proj) => {
  return fetch(`${urlBase}/projects`, {
    headers: {
      'Content-Type': 'application/json',
      Accepts: 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      fileContent: proj.fileContent,
      name: proj.name,
      userId: proj.userId
    })
  }).then(res => res.json())
}

const getProjects = () => {
  return fetch(`${urlBase}/projects`).then(resp => resp.json())
}

export {
  getProjects,
  postProj
}
