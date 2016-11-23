import { ROOT_URL } from '../constants/constants'

const fetchBuilder = (method) => {
  return (url, payload) =>
    fetch(`${ROOT_URL}${url}`, {
      method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: payload && JSON.stringify(payload)
    })
}

export const getJson = fetchBuilder("GET")
export const postJson =  fetchBuilder("POST")
