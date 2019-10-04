export async function getResponseCount() {
  let res = await window.fetch(
    'https://us-central1-example-project-4ad97.cloudfunctions.net/api/response-count',
  )
  let { data } = await res.json()
  return data.count
}
