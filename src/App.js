import React, { useEffect, useState } from 'react'
import './App.css'
import { getResponseCount } from './backend'

function App() {
  const [responseCount, setResponseCount] = useState('...')

  useEffect(() => {
    getResponseCount().then(
      count => {
        setResponseCount(count || 0)
      },
      () => {
        // There's no need to display an error if we can't get the count.
        // Just set it to zero to hide the count.
        setResponseCount('error')
      },
    )
  }, [])

  return <div className="App">{responseCount} responses so far!</div>
}

export default App
