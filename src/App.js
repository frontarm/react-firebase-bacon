import React, { useEffect, useState } from 'react'
import { getResponseCount, postResponse } from './backend'
import {
  Field,
  StyledButton,
  StyledCard,
  StyledClamp,
  StyledHaiku,
  StyledIssue,
} from './components'

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

function validate({ email, name }) {
  let issues = {}
  if (!name) {
    issues.name = 'required'
  }
  if (!email) {
    issues.email = 'required'
  } else if (!/.+@.+/.test(email)) {
    issues.email = 'invalid'
  }
  return Object.keys(issues).length ? issues : undefined
}

function issuesIntersection(x, y) {
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

function App() {
  const [responseCount, setResponseCount] = useState(undefined)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState({
    type: 'fresh',
  })
  const params = { name, email }

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

    const issues = validate(params)
    if (issues) {
      setStatus({
        type: 'error',
        issues,
      })
      return
    }

    setStatus({
      type: 'pending',
    })

    try {
      const result = await postResponse(params)
      if (result.status === 'error') {
        setStatus({
          type: 'error',
          issues: result.issues || {
            base: 'error',
          },
          params,
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
  const submitIssues = status.issues || {}
  const validationIssues = validate(params)
  const unresolvedIssues =
    issuesIntersection(submitIssues, validationIssues) || {}

  // As this issue depends on server state, it won't be picked up by validate,
  // and thus it won't be in the intersection either.
  if (
    status.issues &&
    status.issues.email === 'not-unique' &&
    status.params.email === email
  ) {
    unresolvedIssues.email = 'not-unique'
  }
  const content =
    status.type === 'success' ? (
      <StyledHaiku>
        Thanks for joining in! <br />
        When we're ready to wow you, <br />
        You'll get an email.
      </StyledHaiku>
    ) : (
      <form onSubmit={handleSubmit}>
        <StyledHaiku>
          A social network, <br />
          Where you are the customer. <br />
          Ad free. Launching soon.
        </StyledHaiku>
        <Field
          label="Your name"
          message={messages.name[unresolvedIssues.name]}
          value={name}
          onChange={setName}
        />
        <Field
          label="Your email"
          message={messages.email[unresolvedIssues.email]}
          type="email"
          value={email}
          onChange={setEmail}
        />
        {submitIssues.base && (
          <StyledIssue>{messages.base[submitIssues.base]}</StyledIssue>
        )}
        <StyledButton type="submit" disabled={!canSubmit}>
          {responseCount === undefined
            ? `Loading`
            : responseCount > 1
            ? `Vouch with ${responseCount} others`
            : `I'll vouch for that`}
        </StyledButton>
      </form>
    )

  return (
    <StyledClamp>
      <StyledCard>{content}</StyledCard>
    </StyledClamp>
  )
}

export default App
