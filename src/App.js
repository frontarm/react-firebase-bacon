import React, { useEffect, useState } from 'react'
import './App.css'
import { getResponseCount, postResponse } from './backend'

function App() {
  const [responseCount, setResponseCount] = useState(undefined)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState({
    type: 'fresh',
  })

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

  const handleSubmit = async event => {
    event.preventDefault()

    setStatus({
      type: 'pending',
    })

    try {
      const result = await postResponse({ email, name })
      if (result.status === 'error') {
        let key = Object.keys(result.issues)[0]
        let message = key + ' ' + result.issues[key]
        setStatus({
          type: 'error',
          issue: message,
        })
      } else {
        setStatus({
          type: 'success',
        })
      }
    } catch (error) {
      setStatus({
        type: 'error',
        issue: 'Something went wrong.',
      })
    }
  }

  const canSubmit = responseCount !== undefined && status.type !== 'pending'
  const content =
    status.type === 'success' ? (
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
          <input
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </label>
        {status.issue && <p>{status.issue}</p>}
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
