import React, { useEffect, useState } from 'react'
import './App.css'
import { getResponseCount } from './backend'

function App() {
  const [responseCount, setResponseCount] = useState(undefined)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    getResponseCount().then(
      count => {
        setResponseCount(count || 0)
      },
      () => {
        // There's no need to display an error if we can't get the count.
        // Just set it to zero to hide the count.
        setResponseCount(0)
      },
    )
  }, [])

  const handleSubmit = event => {
    event.preventDefault()
    setSubmitted(true)
  }

  const canSubmit = responseCount !== undefined
  const content = submitted ? (
    <p>
      Thanks for joining in! <br />
      When we're ready to wow you, <br />
      You'll get an email.
    </p>
  ) : (
    <form onSubmit={handleSubmit}>
      <p>
        A social network, <br />
        Where you are the customer. <br />
        Ad free. Launching soon.
      </p>
      <label>
        Name:{' '}
        <input value={name} onChange={event => setName(event.target.value)} />
      </label>
      <label>
        Email:{' '}
        <input value={email} onChange={event => setEmail(event.target.value)} />
      </label>
      <button type="submit" disabled={!canSubmit}>
        {responseCount === undefined
          ? `Loading`
          : responseCount > 1
          ? `Vouch with ${responseCount} others`
          : `I'll vouch for that`}
      </button>
    </form>
  )

  return <div className="App">{content}</div>
}

export default App
