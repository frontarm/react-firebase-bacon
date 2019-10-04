import React, { useEffect, useState } from 'react'
import './App.css'
import { getResponseCount, postResponse } from './backend'

const messages = {
  base: {
    error: 'Something went wrong',
  },
  email: {
    invalid: "That email address doesn't look quite right.",
    'not-unique': 'This email has already been used.',
    required: "You'll need an email to join the list.",
  },
  name: {
    required: 'Who are you, though?',
  },
}

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
        setStatus({
          type: 'error',
          issues: result.issues || {
            base: 'error',
          },
        })
      } else {
        setStatus({
          type: 'success',
        })
      }
    } catch (error) {
      setStatus({
        type: 'error',
        issues: {
          base: 'error',
        },
      })
    }
  }

  const canSubmit = responseCount !== undefined && status.type !== 'pending'
  const issues = status.issues || {}
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
        <Field
          label="Name"
          message={messages.name[issues.name]}
          value={name}
          onChange={setName}
        />
        <Field
          label="Email"
          message={messages.email[issues.email]}
          type="email"
          value={email}
          onChange={setEmail}
        />
        {issues.base && <p>{messages.base[issues.base]}</p>}
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

/**
 * Renders an <input> inside a <label>, with an optional message.
 */
const Field = ({ label, message, onChange, ...inputProps }) => (
  <label>
    {label}:{' '}
    <input {...inputProps} onChange={event => onChange(event.target.value)} />
    {message && <p>{message}</p>}
  </label>
)

export default App
