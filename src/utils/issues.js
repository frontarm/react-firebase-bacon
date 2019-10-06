export function issuesIntersection(x, y) {
  if (!y || !x) {
    return
  }
  let keys = Object.keys(y)
  let intersection = {}
  for (let key of keys) {
    if (x[key] === y[key]) {
      intersection[key] = x[key]
    }
  }
  return intersection
}
