const BaseURL =
  'https://us-central1-example-project-4ad97.cloudfunctions.net/api'

export async function getResponseCount() {
  let res = await window.fetch(BaseURL + '/response-count')
  let { data } = await res.json()
  return data.count
}

/**
 * Submit an email address and name to a test server, and returns
 * the server response's body in case of success, invalid input
 * or a conflict with existing data.
 */
export async function postResponse({ email, name }) {
  let res = await window.fetch(BaseURL + '/response', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      name,
    }),
  })

  // If the server returns something other than expected, throw the
  // response to indicate an error.
  if (res.status !== 200 && res.status !== 400 && res.status !== 409) {
    throw res
  }

  return res.json()
}
