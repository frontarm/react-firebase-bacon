import { createBrowserHistory } from 'history'
import React, { useEffect, useState } from 'react'

import NotFound from 'routes/404'
import Landing from 'routes/landing'
import Privacy from 'routes/privacy'
import Thanks from 'routes/thanks'
import normalizePathname from 'utils/normalizePathname'

const history = createBrowserHistory()
const navigate = path => history.push(path)

function getRoute(location) {
  switch (normalizePathname(location.pathname)) {
    case '/':
      return <Landing navigate={navigate} />

    case '/privacy':
      return <Privacy navigate={navigate} />

    case '/thanks':
      return <Thanks navigate={navigate} />

    default:
      return <NotFound navigate={navigate} />
  }
}

export default function App() {
  const [location, setLocation] = useState(history.location)

  useEffect(() => history.listen(setLocation), [])

  return getRoute(location)
}
